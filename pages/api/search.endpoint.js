import { parsers } from './parsers/parsers'

const searchHandler = async (req, res) => {
  let data = []
  console.log(req.body)
  if (req.body.message.length > 2) {
    for (const parser of parsers) {
      const items = await parser.parse(req.body.message)
      console.log(items)

      if (items.length !== 0) {
        data = [...data, ...items]
      }
    }
  }
  console.log(data)

  res.status(200).json({ data })
}

export default searchHandler
