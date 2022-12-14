// noinspection JSUnusedGlobalSymbols
import { getBrowser } from './utils/utils'

class HachapuriivinoParser {
  static async parse() {
    const browser = await getBrowser()
    const page = await browser.newPage()
    await page.goto('https://www.hachapuriivino.ru/', {
      waitUntil: 'domcontentloaded'
    })
    await page.setViewport({
      width: 1200,
      height: 800
    })

    const items = []
    const elements = await page.$$('.goodsbox')
    for (let i = 0; i < elements.length; i++) {
      const name = await elements[i].$eval(
        '.goods-details-name',
        el => el.innerText
      )
      const price = await elements[i].$eval('.goods-details-price', el =>
        el.innerText.replace(/[^0-9]/g, '')
      )
      const imgLink = await elements[i].$eval('.goods-image', el => el.src)
      items.push({
        name: name,
        description: '',
        price: price,
        site: {
          name: 'Хачапури и вино',
          link: 'https://www.hachapuriivino.ru/'
        },
        link: '',
        imgLink: imgLink
      })
    }

    await browser.close()
    return items
  }
}

export default HachapuriivinoParser
