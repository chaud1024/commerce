import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_gwUFyTQVOCPdfjSdt4KIt3QHDT3oFBWsP8pDtImU0E0',
})

const databaseId = '71c1cc883d27441fa416b45ebc322adf'

async function getItems() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'price',
          direction: 'ascending',
        },
      ],
    })
    console.log('response', response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
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
  const { name } = req.query

  try {
    const response = await getItems()
    res.status(200).json({ items: response?.results, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
