import styled from '@emotion/styled'
import { Button } from '@mantine/core'
import { Cart, OrderItem, products } from '@prisma/client'
import { IconRefresh, IconX } from '@tabler/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useMemo } from 'react'
import { CountControl } from '../components/CountControl'
import { CATEGORY_MAP } from '../constants/products'
import { ORDER_QUERY_KEY } from './my'

interface CartItem extends Cart {
  name: string
  price: number
  image_url: string
}

export const CART_QUERY_KEY = '/api/get-cart'

const CartPage = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { data } = useQuery<{ items: CartItem[] }, unknown, CartItem[]>({
    queryKey: [`/api/get-cart`],
    queryFn: () =>
      fetch(CART_QUERY_KEY)
        .then((res) => res.json())
        .then((data) => data.items),
  })

  const deliveryFee = data && data.length > 0 ? 0 : 5000
  const discount = 0

  const totalAmount = useMemo(() => {
    if (data == null) {
      return 0
    }
    return data
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0)
  }, [data])

  const totalQuantity = useMemo(() => {
    if (data == null) {
      return 0
    }
    return data
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0)
  }, [data])

  const { data: products } = useQuery<
    { items: products[] }, // 이 products는 @prisma/client에서 가져온 products
    unknown,
    products[]
  >({
    queryKey: [`/api/get-products?skip=0&take=3`],
    queryFn: () =>
      fetch(`/api/get-products?skip=0&take=3`).then((res) => res.json()),
    select: (data) => data.items,
  })

  const { mutate: addOrder } = useMutation<
    unknown,
    unknown,
    Omit<OrderItem, 'id'>[],
    any
  >(
    (items) =>
      fetch('/api/add-order', {
        method: 'POST',
        body: JSON.stringify({ items }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: () => {
        queryClient.invalidateQueries([ORDER_QUERY_KEY])
      },
      onSuccess: () => {
        router.push('/my')
      },
    }
  )

  const handleOrder = () => {
    // todo: 구매하기 기능 구현
    if (data == null) {
      return
    }
    addOrder(
      data.map((cart) => ({
        productId: cart.productId,
        price: cart.price,
        amount: cart.amount,
        quantity: cart.quantity,
      }))
    )
    alert(`${totalQuantity}개의 상품을 결제합니다.`)
    // console.log(JSON.stringify(data))
  }

  return (
    <div>
      <span className="text-2xl mb-3">cart ({data ? data.length : 0})개</span>
      <div className="flex">
        <div className="w-full px-4 space-y-4">
          {data ? (
            data.length > 0 ? (
              data.map((item, idx) => <Item key={idx} {...item} />)
            ) : (
              <div>장바구니에 아무것도 없습니다.</div>
            )
          ) : (
            <div>불러오는중...</div>
          )}
        </div>
      </div>
      <div className="px-4">
        <div className="text-2xl mb-3">Details</div>
        <Row>
          <span>상품수량</span>
          <span>{totalQuantity.toLocaleString('ko-kr')} 개</span>
        </Row>
        <Row>
          <span>주문금액</span>
          <span>{totalAmount.toLocaleString('ko-kr')} 원</span>
        </Row>
        <Row>
          <span>배송비</span>
          <span>{deliveryFee.toLocaleString('ko-kr')} 원</span>
        </Row>
        <Row>
          <span>할인금액</span>
          <span>{discount.toLocaleString('ko-kr')} 원</span>
        </Row>
        <Row>
          <span className="font-semibold">결제금액</span>
          <span className="font-semibold text-red-500">
            {(totalAmount + deliveryFee - discount).toLocaleString('ko-kr')} 원
          </span>
        </Row>
        <Button
          style={{ backgroundColor: 'black' }}
          radius="xl"
          size="md"
          onClick={handleOrder}
        >
          구매하기
        </Button>
      </div>
      <div className="mt-32">
        <div>추천상품</div>
        {products && (
          <div className="grid grid-cols-3 gap-5">
            {products.map((item) => (
              <div
                key={item.id}
                style={{ maxWidth: 310 }}
                onClick={() => router.push(`/products/${item.id}`)}
              >
                <Image
                  className="rounded"
                  src={item.image_url ?? ''}
                  alt={item.name}
                  width={310}
                  height={400}
                  placeholder="blur"
                  blurDataURL="data:iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNU3woAAQkA3v5vIdoAAAAASUVORK5CYII="
                />
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span>{item.price.toLocaleString('ko-KR')} 원</span>
                </div>
                <span className="text-slate-400">
                  {CATEGORY_MAP[item.category_id - 1]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage

const Item = (props: CartItem) => {
  const [quantity, setQuantity] = useState<number | undefined>(props.quantity)
  const [itemAmount, setItemAmount] = useState<number>(props.quantity)
  const router = useRouter()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (quantity != null) {
      setItemAmount(quantity * props.price)
    }
  }, [quantity, props.price])

  const { mutate: updateCart } = useMutation<unknown, unknown, Cart, any>(
    (item) =>
      fetch('/api/update-cart', {
        method: 'POST',
        body: JSON.stringify({ item }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: async (item) => {
        await queryClient.cancelQueries([CART_QUERY_KEY])

        // snapshot the previous value
        const previousValue = queryClient.getQueriesData([CART_QUERY_KEY])

        // optimistically update to the new value
        queryClient.setQueryData<Cart[]>([CART_QUERY_KEY], (old) =>
          old?.filter((c) => c.id !== item.id).concat(item)
        )

        // return a context object with the snapshotted value
        return { previousValue }
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([CART_QUERY_KEY], context.previousValue)
      },
      onSuccess: () => {
        queryClient.invalidateQueries([CART_QUERY_KEY])
      },
    }
  )

  const { mutate: deleteCart } = useMutation<unknown, unknown, number, any>(
    (id) =>
      fetch('/api/delete-cart', {
        method: 'POST',
        body: JSON.stringify({ id }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: async (id) => {
        await queryClient.cancelQueries([CART_QUERY_KEY])

        // snapshot the previous value
        const previousValue = queryClient.getQueriesData([CART_QUERY_KEY])

        // optimistically update to the new value
        queryClient.setQueryData<Cart[]>([CART_QUERY_KEY], (old) =>
          old?.filter((c) => c.id !== id)
        )

        // return a context object with the snapshotted value
        return { previousValue }
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([CART_QUERY_KEY], context.previousValue)
      },
      onSuccess: () => {
        queryClient.invalidateQueries([CART_QUERY_KEY])
      },
    }
  )

  const handleDelete = async () => {
    // todo: 장바구니에서 삭제기능 구현
    await deleteCart(props.id)
    alert(`장바구니에서 ${props.name} 삭제`)
  }

  const handelUpdate = () => {
    // todo: 장바구니 수량 업데이트 기능 구현
    if (quantity == null) {
      alert('최소 수량을 선택하세요')
      return
    }
    updateCart({ ...props, quantity: quantity, amount: props.price * quantity })
    alert(`장바구니에서 ${props.name}의 수량을 수정`)
  }

  return (
    <div
      className="w-full flex p-4 "
      style={{ borderBottom: '1px solid gray' }}
    >
      <Image
        src={props.image_url}
        alt={props.name}
        width={155}
        height={195}
        onClick={() => router.push(`/products/${props.productId}`)}
      />
      <div className="flex flex-col ml-4">
        <div className="font-semibold mb-2">{props.name}</div>
        <div className="mb-auto">
          가격: {props.price.toLocaleString('ko-kr')} 원
        </div>
        <div className="flex items-center space-x-4">
          <CountControl value={quantity} setValue={setQuantity} />
          <IconRefresh onClick={handelUpdate} />
        </div>
      </div>
      <div className="flex ml-auto space-x-4">
        <div>{itemAmount.toLocaleString('ko-kr')} 원</div>
        <IconX onClick={handleDelete} />
      </div>
    </div>
  )
}

const Row = styled.div`
  display: flex;
  * ~ * {
    margin-left: auto;
  }
`
