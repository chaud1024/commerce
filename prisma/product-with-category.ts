import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const sneakers = [
  {
    name: `Sneakers 1`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 2`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/53/P00707281.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 3`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 3","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00706311.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 4`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 4","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6c/P00698829.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 5`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 5","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 6`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 6","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/53/P00707281.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 7`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 7","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00706311.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 8`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 8","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/6c/P00698829.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 9`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 9","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Sneakers 10`,
    contents: `{"blocks":[{"key":"dha4m","text":"Sneakers 10","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00706311.jpg',
    price: getRandom(300000, 100000),
  },
]

const tShirt = [
  {
    name: `T-Shirt 1`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/aa/P00701506.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 2`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8b/P00656897.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 3`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 3","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7c/P00657670.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 4`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 4","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/89/P00439355.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 5`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 5","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/99/P00468097.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 6`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 6","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/aa/P00701506.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 7`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 7","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/8b/P00656897.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 8`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 8","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7c/P00657670.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 9`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 9","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/89/P00439355.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `T-Shirt 10`,
    contents: `{"blocks":[{"key":"dha4m","text":"T-Shirt 10","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/99/P00468097.jpg',
    price: getRandom(300000, 100000),
  },
]

const pants = [
  {
    name: `Pants 1`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/0b/P00360672.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 2`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/cb/P00490024.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 3`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 3","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00739625.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 4`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 4","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/23/P00581157.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 5`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 5","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c5/P00609609.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 6`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 6","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/0b/P00360672.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 7`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 7","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/cb/P00490024.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 8`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 8","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/23/P00581157.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Pants 9`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 9","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/c5/P00609609.jpg',
    price: getRandom(300000, 100000),
  },

  {
    name: `Pants 10`,
    contents: `{"blocks":[{"key":"dha4m","text":"Pants 10","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/92/P00739625.jpg',
    price: getRandom(300000, 100000),
  },
]

const cap = [
  {
    name: `Cap 1`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3e/P00730360_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 2`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/29/P00726938_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 3`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 3","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/84/P00644436_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 4`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 4","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00709940_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 5`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 5","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00704998_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 6`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 6","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3e/P00730360_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 7`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 7","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/29/P00726938_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 8`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 8","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/84/P00644436_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 9`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 9","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/06/P00709940_b1.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Cap 10`,
    contents: `{"blocks":[{"key":"dha4m","text":"Cap 10","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/af/P00704998_b1.jpg',
    price: getRandom(300000, 100000),
  },
]

const hoodie = [
  {
    name: `Hoodie 1`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 1","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00692695.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 2`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7f/P00670659.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 3`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 3","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/02/P00695073.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 4`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 4","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9f/P00565431.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 5`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 5","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/a4/P00714874.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 6`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 6","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/2e/P00692695.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 7`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 7","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/7f/P00670659.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 8`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 8","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/02/P00695073.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 9`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 9","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/9f/P00565431.jpg',
    price: getRandom(300000, 100000),
  },
  {
    name: `Hoodie 10`,
    contents: `{"blocks":[{"key":"dha4m","text":"Hoodie 10","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/a4/P00714874.jpg',
    price: getRandom(300000, 100000),
  },
]

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirt,
  ...pants,
  ...cap,
  ...hoodie,
]

async function main() {
  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// yarn ts-node prisma/product.ts(해당파일명)
