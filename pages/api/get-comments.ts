import type { NextApiRequest, NextApiResponse } from 'next'
import { OrderItem, PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function getComments(productId: number) {
  try {
    const ordersItems = await prisma.orderItem.findMany({
      where: {
        productId,
      },
    })

    console.log('ordersItems', ordersItems)

    let response = []

    // ordersItems를 기반으로 comment 조회
    for (const orderItem of ordersItems) {
      const res = await prisma.comment.findUnique({
        where: {
          orderItemId: orderItem.id,
        },
      })
      if (res) {
        response.push({ ...orderItem, ...res })
      }
    }

    console.log('response', response)

    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { productId } = req.query

  if (productId === null) {
    res.status(200).json({ items: [], message: `no productId` })
    return
  }

  try {
    const wishlist = await getComments(Number(productId))
    res.status(200).json({ items: wishlist, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
