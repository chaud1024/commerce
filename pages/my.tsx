import styled from '@emotion/styled'
import { Badge, Button } from '@mantine/core'
import { Cart, OrderItem, Orders, products } from '@prisma/client'
import { IconRefresh, IconX } from '@tabler/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import React, { useState, useEffect, useMemo } from 'react'
import { CountControl } from '../components/CountControl'
import { CATEGORY_MAP } from '../constants/products'

interface OrderItemDetail extends OrderItem {
  name: string
  image_url: string
}

interface OrderDetail extends Orders {
  orderItems: OrderItemDetail[]
}

const ORDER_STATUS_MAP = [
  '주문취소',
  '주문대기',
  '결제대기',
  '결제완료',
  '배송대기',
  '배송중',
  '배송완료',
  '환불대기',
  '환불완료',
  '반품대기',
  '반품완료',
]

export const ORDER_QUERY_KEY = '/api/get-order'

const MyPage = () => {
  const router = useRouter()

  const { data } = useQuery<{ items: OrderDetail[] }, unknown, OrderDetail[]>({
    queryKey: [ORDER_QUERY_KEY],
    queryFn: () =>
      fetch(ORDER_QUERY_KEY)
        .then((res) => res.json())
        .then((data) => data.items),
  })

  return (
    <div>
      <span className="text-2xl mb-3">
        주문내역 ({data ? data.length : 0})개
      </span>
      <div className="flex">
        <div className="w-full px-4 space-y-4">
          {data ? (
            data.length > 0 ? (
              data.map((item, idx) => <DetailItem key={idx} {...item} />)
            ) : (
              <div>주문내역이 없습니다.</div>
            )
          ) : (
            <div>불러오는중...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyPage

const DetailItem = (props: OrderDetail) => {
  const handlePayment = () => {
    alert('결제를 진행합니다.')
  }
  const handleDelete = () => {
    alert('해당 주문을 삭제합니다.')
  }
  return (
    <div
      className="w-full flex flex-col p-4 "
      style={{ border: '1px solid gray' }}
    >
      <div className="flex">
        <Badge color={props.status === 0 ? 'red' : ''}>
          {ORDER_STATUS_MAP[props.status + 1]}
        </Badge>
        <IconX className="ml-auto" onClick={handleDelete} />
      </div>
      <div>
        {props.orderItems.map((orderItem, idx) => (
          <Item key={idx} {...orderItem} status={props.status} />
        ))}
      </div>
      <div className="flex mt-4">
        <div className="flex flex-col">
          <span className="mb-2 text-lg font-semibold">주문자 정보</span>
          <span>받는사람 : {props.receiver ?? '입력필요'}</span>
          <span>주소 : {props.address ?? '입력필요'}</span>
          <span>연락처 : {props.phoneNumber ?? '입력필요'}</span>
        </div>
        <div className="flex flex-col ml-auto mr-4 text-right">
          <span className="mb-2 text-lg font-semibold">결제 정보</span>
          <span>
            결제총금액 : {''}
            <span className="text-red-500 font-semibold">
              {props.orderItems
                .map((item) => item.amount)
                .reduce((prev, curr) => prev + curr, 0)
                .toLocaleString('ko-kr')}{' '}
            </span>
            원
          </span>
          <span className="text-zinc-400 mt-auto mb-auto">
            주문일자 :{' '}
            {format(new Date(props.createdAt), 'yyyy년 M월 dd일 HH:mm:ss')}
          </span>
          <Button
            style={{ backgroundColor: 'black', color: 'white' }}
            onClick={handlePayment}
          >
            결제처리
          </Button>
        </div>
      </div>
    </div>
  )
}

const Item = (props: OrderItemDetail & { status: number }) => {
  const [quantity, setQuantity] = useState<number | undefined>(props.quantity)
  const [itemAmount, setItemAmount] = useState<number>(props.quantity)
  const router = useRouter()

  useEffect(() => {
    if (quantity != null) {
      setItemAmount(quantity * props.price)
    }
  }, [quantity, props.price])

  const handleComment = () => {
    router.push(`/comment/edit?orderItemId=${props.id}`)
  }

  return (
    <div className="w-full flex p-4 ">
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
        </div>
      </div>
      <div className="flex flex-col ml-auto space-x-4">
        <div>{itemAmount.toLocaleString('ko-kr')} 원</div>
        {
          <Button
            style={{
              backgroundColor: 'black',
              color: 'white',
              marginTop: 'auto',
            }}
            onClick={handleComment}
          >
            후기작성
          </Button>
        }
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
