import { getRecords } from './db/services'
import { checkIncluding, sortByPrice } from './parsers/utils/utils'

const searchHandler = async (req, res) => {
  if (req.body.message.length > 2) {
    try {
      const data = (await getRecords()).data
        .filter(
          el =>
            checkIncluding(el.name, req.body.message) ||
            checkIncluding(el.description, req.body.message)
        )
        .sort(sortByPrice)

      res.status(200).json({ data })
    } catch (e) {
      console.log(e)
      res.status(500).json({
        error: 'Not found'
      })
    }
  } else
    return res.status(404).json({
      error: 'Not found'
    })
}

export default searchHandler
