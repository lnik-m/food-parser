import { parsers } from './parsers/parsers'
import { updateRecords } from './db/services'

const updateDbHandler = async (_, res) => {
  let data = []
  for (const parser of parsers) {
    const items = await parser.parse()
    if (items.length !== 0) {
      data = [...data, ...items]
    }
    await updateRecords(data)
  }
  res.status(200).json({ data })
}

export default updateDbHandler
