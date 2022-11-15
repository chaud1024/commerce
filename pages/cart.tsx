import styled from '@emotion/styled'
import { Button, Divider } from '@mantine/core'
import { products } from '@prisma/client'
import { IconRefresh, IconShoppingCart, IconX } from '@tabler/icons'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import React, { useState, useEffect, useMemo } from 'react'
import { CountControl } from '../components/CountControl'
import { CATEGORY_MAP } from '../constants/products'

interface CartItem {
  name: string
  productId: number
  price: number
  quantity: number
  amount: number
  image_url: string
}

const Cart = () => {
  const router = useRouter()
  const [cartData, setCartData] = useState<CartItem[]>([])

  const deliveryFee = 5000
  const discount = 0

  const totalAmount = useMemo(() => {
    return cartData
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0)
  }, [cartData])

  const totalQuantity = useMemo(() => {
    return cartData
      .map((item) => item.quantity)
      .reduce((prev, curr) => prev + curr, 0)
  }, [cartData])

  useEffect(() => {
    const mockData = [
      {
        name: '플러피 캡',
        productId: 37,
        price: 20000,
        quantity: 2,
        amount: 40000,
        image_url:
          'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/29/P00726938_b1.jpg',
      },
      {
        name: '웜 후디',
        productId: 46,
        price: 20000,
        quantity: 1,
        amount: 20000,
        image_url:
          'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00692695.jpg',
      },
    ]
    setCartData(mockData)
  }, [])

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
    console.log(JSON.stringify(cartData))
  }

  return (
    <div>
      <span className="text-2xl mb-3">cart ({cartData.length})개</span>
      <div className="flex">
        <div className="w-full px-4 space-y-4">
          {cartData?.length > 0 ? (
            cartData.map((item, idx) => <Item key={idx} {...item} />)
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

export default Cart

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
