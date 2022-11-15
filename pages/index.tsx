import { categories, products } from '@prisma/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Input, Pagination, SegmentedControl, Select } from '@mantine/core'
import { CATEGORY_MAP, FILTERS, TAKE } from '../constants/products'
import { IconSearch } from '@tabler/icons'
import useDebounce from '../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'

const Home = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [activePage, setPage] = useState(1)
  // const [total, setTotal] = useState(0) // useEffect사용 get-products-count fetch
  // const [categories, setCategories] = useState<categories[]>([]) // useEffect사용 get-categories fetch
  const [selectedCategory, setSelectedCategory] = useState<string>('-1')
  // const [products, setProducts] = useState<products[]>([]) // useEffect사용 get-products-skip~ fetch
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    FILTERS[0].value
  )
  const [keyword, setKeyword] = useState('')

  const debouncedKeyword = useDebounce<string>(keyword)

  // useEffect(() => {
  //   fetch(`/api/get-categories`)
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data.items))
  // }, [])
  // 마운트 되는 시점에 defendency 없이 조회되도록

  const { data: categories } = useQuery<
    { items: categories[] },
    unknown,
    categories[]
  >({
    queryKey: [`/api/get-categories`],
    queryFn: () => fetch(`/api/get-categories`).then((res) => res.json()),
    select: (data) => data.items,
  })

  // useEffect(() => {
  //   fetch(
  //     `/api/get-products-count?category=${selectedCategory}&contains=${debouncedKeyword}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setTotal(Math.ceil(data.items / TAKE)))
  // }, [selectedCategory, debouncedKeyword])
  // count는 카테고리에 따라서 조회되도록 + 검색키워드

  const { data: total } = useQuery({
    queryKey: [
      `/api/get-products-count?category=${selectedCategory}&contains=${debouncedKeyword}`,
    ],
    queryFn: () =>
      fetch(
        `/api/get-products-count?category=${selectedCategory}&contains=${debouncedKeyword}`
      )
        .then((res) => res.json())
        .then((data) => Math.ceil(data.items / TAKE)),
  })

  // useEffect(() => {
  //   const skip = TAKE * (activePage - 1)
  //   fetch(
  //     `/api/get-products?skip=${skip}&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.items))
  // }, [activePage, selectedCategory, selectedFilter, debouncedKeyword])
  // products는 카테고리 혹은 액티브 페이지에 따라서 조회되도록 + 선택한 필터 + 검색키워드
  // selectedCategory, selectedFilter, debouncedKeyword

  const { data: products } = useQuery<
    { items: products[] }, // 이 products는 @prisma/client에서 가져온 products
    unknown,
    products[]
  >({
    queryKey: [
      `/api/get-products?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`,
    ],
    queryFn: () =>
      fetch(
        `/api/get-products?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`
      ).then((res) => res.json()),
    select: (data) => data.items,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <div className="px-36 mt-36 mb-36">
      {session && <div>안녕하세요, {session.user?.name} 님</div>}
      <div className="flex justify-between">
        <div className="flex">
          {categories && (
            <div className="mb-4">
              <SegmentedControl
                value={selectedCategory}
                onChange={setSelectedCategory}
                data={[
                  { label: 'ALL', value: '-1' },
                  ...categories.map((category) => ({
                    label: category.name,
                    value: String(category.id),
                  })),
                ]}
                color="dark"
              />
            </div>
          )}

          <div className="mb-4">
            <Select
              value={selectedFilter}
              onChange={setSelectedFilter}
              data={FILTERS}
            />
          </div>
        </div>
        <div className="mb-4">
          <Input
            icon={<IconSearch />}
            placeholder="Search items"
            value={keyword}
            onChange={handleChange}
          />
        </div>
      </div>

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
      <div className="w-full flex mt-5">
        {total && (
          <Pagination
            className="m-auto"
            page={activePage}
            onChange={setPage}
            total={total}
          />
        )}
      </div>
    </div>
  )
}

export default Home
