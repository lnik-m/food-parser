import { parsers } from './parsers/parsers'

const searchHandler = async (req, res) => {
  let data = []

  if (req.body.message.length > 2) {
    for (const parser of parsers) {
      const items = await parser.parse(req.body.message)

      if (items.length !== 0) {
        data = [...data, ...items]
      }
    }
  } else
    return res.status(404).json({
      error: 'Not found'
    })

  res.status(200).json({ data })
}

export default searchHandler
