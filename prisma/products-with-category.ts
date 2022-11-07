import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const sneakers = [
  {
    name: `Sneakers 1`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 1","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 2`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00367098.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 3`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 4`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 4","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00367098.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 5`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 6`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 6","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00367098.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 7`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 7","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 8`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 8","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00367098.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 9`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 9","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/80/P00707283.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Sneakers 10`,
    contents: `{"blocks":[{"key":"e71n1","text":"인기 스니커즈 10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/83/P00367098.jpg',
    price: getRandom(300000, 10000),
  },
]

const tShirts = [
  {
    name: `T-Shirt 1`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 1","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/15/P00745233.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 2`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/16/P00719270.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 3`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/15/P00745233.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 4`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 4","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/16/P00719270.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 5`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/15/P00745233.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 6`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 6","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/16/P00719270.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 7`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 7","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/15/P00745233.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 8`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 8","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/16/P00719270.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 9`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 9","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/15/P00745233.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `T-Shirt 10`,
    contents: `{"blocks":[{"key":"e71n1","text":"티셔츠 10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/16/P00719270.jpg',
    price: getRandom(300000, 10000),
  },
]

const pants = [
  {
    name: `Pants 1`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 1","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00694753.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 2`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/66/P00703432.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 3`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00694753.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 4`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 4","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/66/P00703432.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 5`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00694753.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 6`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 6","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/66/P00703432.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 7`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 7","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00694753.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 8`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 8","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/66/P00703432.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 9`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 9","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/4d/P00694753.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Pants 10`,
    contents: `{"blocks":[{"key":"e71n1","text":"스웨트 팬츠 10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/66/P00703432.jpg',
    price: getRandom(300000, 10000),
  },
]

const cap = [
  {
    name: `Cap 1`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 1","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3e/P00730360_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 2`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3a/P00726925_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 3`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3e/P00730360_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 4`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 4","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3a/P00726925_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 5`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3e/P00730360_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 6`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 6","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3a/P00726925_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 7`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 7","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3e/P00730360_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 8`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 8","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3a/P00726925_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 9`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 9","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3e/P00730360_b1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Cap 10`,
    contents: `{"blocks":[{"key":"e71n1","text":"플러피 캡 10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/3a/P00726925_b1.jpg',
    price: getRandom(300000, 10000),
  },
]

const hoodie = [
  {
    name: `Hoodie 1`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 1","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/df/P00679589_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 2`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/00/P00642269_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 3`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/df/P00679589_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 4`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 4","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/00/P00642269_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 5`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/df/P00679589_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 6`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 6","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/00/P00642269_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 7`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 7","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/df/P00679589_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 8`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 8","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/00/P00642269_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 9`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 9","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/df/P00679589_d1.jpg',
    price: getRandom(300000, 10000),
  },
  {
    name: `Hoodie 10`,
    contents: `{"blocks":[{"key":"e71n1","text":"후디 10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/00/P00642269_d1.jpg',
    price: getRandom(300000, 10000),
  },
]

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirts,
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
