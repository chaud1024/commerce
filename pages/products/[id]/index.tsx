// import ImageGallery from 'react-image-gallery'
import Image from 'next/image'
import Head from 'next/head'
import Carousel from 'nuka-carousel/lib/carousel'
import React, { useState, useEffect } from 'react'
import CustomEditor from '../../../components/Editor'
import { useRouter } from 'next/router'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import { GetServerSidePropsContext } from 'next/types'
import { Cart, products } from '@prisma/client'
import { format } from 'date-fns'
import { CATEGORY_MAP } from '../../../constants/products'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button } from '@mantine/core'
import { IconHeart, IconHeartbeat, IconShoppingCart } from '@tabler/icons'
import { useSession } from 'next-auth/react'
import { json } from 'stream/consumers'
import { CountControl } from '../../../components/CountControl'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const product = await fetch(
    `http://localhost:3000/api/get-product?id=${context.params?.id}`
  )
    .then((res) => res.json())
    .then((data) => data.items)
  return {
    props: {
      product: { ...product, images: [product.image_url, product.image_url] },
    },
  }
}

const WISHLIST_QUERY_KEY = '/api/get-wishlist'

const Products = (props: { product: products & { images: string[] } }) => {
  //   return <ImageGallery items={images} />
  const [index, setIndex] = useState(0)
  const [quantity, setQuantity] = useState<number | undefined>(1)

  const router = useRouter()
  const queryClient = useQueryClient()
  const { id: productId } = router.query

  const [editorState] = useState<EditorState | undefined>(() =>
    props.product.contents
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.product.contents))
        )
      : EditorState.createEmpty()
  )

  const { data: session } = useSession()

  const { data: wishlist } = useQuery([WISHLIST_QUERY_KEY], () =>
    fetch(WISHLIST_QUERY_KEY)
      .then((res) => res.json())
      .then((data) => data.items)
  )

  const { mutate } = useMutation<unknown, unknown, string, any>(
    (productId) =>
      fetch('/api/update-wishlist', {
        method: 'POST',
        body: JSON.stringify({ productId }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: async (productId) => {
        await queryClient.cancelQueries([WISHLIST_QUERY_KEY])

        // snapshot the previous value
        const previousValue = queryClient.getQueriesData([WISHLIST_QUERY_KEY])

        // optimistically update to the new value
        queryClient.setQueryData<string[]>([WISHLIST_QUERY_KEY], (old) =>
          old
            ? old.includes(String(productId))
              ? old.filter((id) => id !== String(productId))
              : old.concat(String(productId))
            : []
        )

        // return a context object with the snapshotted value
        return { previousValue }
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([WISHLIST_QUERY_KEY], context.previousValue)
      },
      onSuccess: () => {
        queryClient.invalidateQueries([WISHLIST_QUERY_KEY])
      },
    }
  )

  const { mutate: addCart } = useMutation<
    unknown,
    unknown,
    Omit<Cart, 'id' | 'userId'>,
    any
  >((item) =>
    fetch('/api/add-cart', {
      method: 'POST',
      body: JSON.stringify({ item }),
    })
      .then((data) => data.json())
      .then((res) => res.items)
  )

  const product = props.product

  const validate = async (type: 'cart' | 'order') => {
    if (quantity == null) {
      alert('최소수량을 선택하세요.')
      return
    }

    // todo: 장바구니에 등록하는 기능 추가
    await addCart({
      productId: product.id,
      quantity: quantity,
      amount: product.price * quantity,
    })

    router.push('/cart')
  }

  const isWished =
    wishlist != null && productId != null ? wishlist.includes(productId) : false

  return (
    <>
      {product != null && productId !== null ? (
        <div className="flex flex-row">
          <div style={{ maxWidth: 600, marginRight: 52 }}>
            <Carousel withoutControls wrapAround speed={10} slideIndex={index}>
              {product.images.map((url, idx) => (
                <Image
                  key={`${url}-carousel-${idx}`}
                  src={url}
                  alt="이미지"
                  width={600}
                  height={600}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              ))}
            </Carousel>
            <div className="flex space-x-4 mt-2">
              {product.images.map(
                (
                  url,
                  idx:
                    | string
                    | number
                    | ((prevState: number) => number)
                    | null
                    | undefined
                ) => (
                  <div
                    key={`${url}-thumb-${idx}`}
                    onClick={() => setIndex(idx)}
                  >
                    <Image src={url} alt="썸네일" width={100} height={100} />
                  </div>
                )
              )}
            </div>
            {editorState != null && (
              <CustomEditor editorState={editorState} readOnly />
            )}
          </div>
          <div style={{ maxWidth: 600 }} className="flex flex-col space-y-6">
            <div className="text-lg text-zinc-400">
              {CATEGORY_MAP[product.category_id - 1]}
            </div>
            <div className="text-4xl font-semibold">{product.name}</div>
            <div className="fext-lg">
              {product.price.toLocaleString('ko-KR')} 원
            </div>
            {/* <div>{JSON.stringify(wishlist)}</div> */}

            <div>
              <span className="text-lg">수량</span>
              <CountControl value={quantity} setValue={setQuantity} />
            </div>
            <div className="flex space-x-3">
              <Button
                leftIcon={<IconShoppingCart size={20} stroke={1.5} />}
                style={{ backgroundColor: 'black' }}
                radius="xl"
                size="md"
                onClick={() => {
                  if (session == null) {
                    alert('로그인이 필요합니다')
                    router.push('/auth/login')
                    return
                  }
                  validate('cart')
                }}
              >
                장바구니
              </Button>
              <Button
                // loading={isLoading}
                disabled={wishlist == null}
                leftIcon={
                  isWished ? (
                    <IconHeart size={20} stroke={1.5} />
                  ) : (
                    <IconHeartbeat />
                  )
                }
                style={{ backgroundColor: isWished ? 'red' : 'grey' }}
                radius="xl"
                size="md"
                onClick={() => {
                  if (session == null) {
                    alert('로그인이 필요합니다')
                    router.push('/auth/login')
                    return
                  }
                  mutate(String(productId))
                }}
              >
                찜하기
              </Button>
            </div>
            <div className="text-sm text-zinc-300">
              상품등록일 :{' '}
              {format(new Date(product.createdAt), 'yyyy년 M월 dd일')}
            </div>
          </div>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </>
  )
}

export default Products
