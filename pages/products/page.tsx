import { categories, products } from '@prisma/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Pagination, SegmentedControl, Select } from '@mantine/core'
import { CATEGORY_MAP, FILTERS, TAKE } from '../../constants/products'

const Products = () => {
  const [activePage, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState<categories[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('-1')
  const [products, setProducts] = useState<products[]>([])
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    FILTERS[0].value
  )

  useEffect(() => {
    fetch(`/api/get-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.items))
  }, [])
  //  마운트 되는 시점에 defendency 없이 조회되도록
  useEffect(() => {
    fetch(`/api/get-products-count?category=${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => setTotal(Math.ceil(data.items / TAKE)))
  }, [selectedCategory])
  // count는 카테고리에 따라서 조회되도록

  useEffect(() => {
    const skip = TAKE * (activePage - 1)
    fetch(
      `/api/get-products?skip=${skip}&take=${TAKE}&category=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [activePage, selectedCategory])
  // products는 카테고리 혹은 액티브 페이지에 따라서 조회되도록

  return (
    <div className="px-36 mt-36 mb-36">
      <div className="flex justify-between">
        <div className="mb-4">
          <Select
            value={selectedFilter}
            onChange={setSelectedFilter}
            data={FILTERS}
          />
        </div>
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
      </div>
      {products && (
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <div key={item.id} style={{ maxWidth: 310 }}>
              <Image
                className="rounded"
                src={item.image_url ?? ''}
                alt={item.name}
                width={310}
                height={390}
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
        <Pagination
          className="m-auto"
          page={activePage}
          onChange={setPage}
          total={total}
        />
      </div>
    </div>
  )
}

export default Products
