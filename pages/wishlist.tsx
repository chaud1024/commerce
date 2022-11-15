import { products } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { CATEGORY_MAP } from '../constants/products'

const Wishlist = () => {
  const router = useRouter()
  const { data: products } = useQuery<
    { items: products[] }, // 이 products는 @prisma/client에서 가져온 products
    unknown,
    products[]
  >({
    queryKey: [`/api/get-wishlists`],
    queryFn: () => fetch(`/api/get-wishlists`).then((res) => res.json()),
    select: (data) => data.items,
  })

  return (
    <div>
      <p className="text-2xl mb-4">찜한 상품</p>
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
  )
}

export default Wishlist
