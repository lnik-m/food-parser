import { parsers } from './parsers/parsers'
import { sortByPrice } from './parsers/utils'
import { getBrowser } from './parsers/puppeteer_browser'

const searchHandler = async (req, res) => {
  let data = []

  if (req.body.message.length > 2) {
    const parseResults = await Promise.all(
      parsers.map(parser => parser.parse(req.body.message))
    )
    const browser = await getBrowser()
    await browser.close()
    for (const items of parseResults) {
      data = [...data, ...items]
    }
    data = data.sort(sortByPrice)
  } else
    return res.status(404).json({
      error: 'Not found'
    })

  res.status(200).json({ data })
}

export default searchHandler
