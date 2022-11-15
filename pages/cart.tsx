import styled from '@emotion/styled'
import { Button } from '@mantine/core'
import { Cart, products } from '@prisma/client'
import { IconRefresh, IconX } from '@tabler/icons'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useMemo } from 'react'
import { CountControl } from '../components/CountControl'
import { CATEGORY_MAP } from '../constants/products'

interface CartItem extends Cart {
  name: string
  price: number
  image_url: string
}

const CartPage = () => {
  const router = useRouter()

  const { data } = useQuery<{ items: CartItem[] }, unknown, CartItem[]>({
    queryKey: [`/api/get-cart`],
    queryFn: () =>
      fetch(`/api/get-cart`)
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

  const handleOrder = () => {
    // todo: 구매하기 기능 구현
    alert(`${totalQuantity}개의 상품을 결제합니다.`)
    console.log(JSON.stringify(data))
  }

  return (
    <div>
      <span className="text-2xl mb-3">cart ({data ? data.length : 0})개</span>
      <div className="flex">
        <div className="w-full px-4 space-y-4">
          {data && data.length > 0 ? (
            data.map((item, idx) => <Item key={idx} {...item} />)
          ) : (
            <div>장바구니에 아무것도 없습니다.</div>
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

  useEffect(() => {
    if (quantity != null) {
      setItemAmount(quantity * props.price)
    }
  }, [quantity, props.price])

  const handleDelete = () => {
    // todo: 장바구니에서 삭제기능 구현
    alert(`장바구니에서 ${props.name} 삭제`)
  }

  const handelUpdate = () => {
    // todo: 장바구니 수량 업데이트 기능 구현
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
