import { autoScroll, getBrowser } from './utils/utils'

// DominosParser
class DominosParser {
  static async parse() {
    const browser = await getBrowser()
    const page = await browser.newPage()
    await page.goto('https://spb.dominospizza.ru/', {
      waitUntil: 'domcontentloaded'
    })
    await page.setViewport({
      width: 1200,
      height: 800
    })

    await autoScroll(page)
    const items = await this.findItems(page)
    await page.close()
    await browser.close()
    return items
  }

  static async findItems(page) {
    const items = []
    let i = 1
    while (i) {
      const pizza = await page.$(`[id="product_pizza_${i}"]`)
      if (pizza === null || pizza === undefined) break

      const item = {
        name: await this.findChildByItemProp(
          pizza,
          'name',
          child => child.innerHTML
        ),
        description: await this.findChildByItemProp(
          pizza,
          'description',
          child => child.innerHTML
        ),
        price: await this.findPrice(pizza),
        site: {
          name: 'DominosPizza',
          link: 'https://spb.dominospizza.ru/'
        },
        link: '',
        imgLink: await this.findChildByItemProp(
          pizza,
          'image',
          child => child.src
        )
      }
      items.push(item)
      i++
    }
    return items
  }

  static async findChildByItemProp(element, itemProp, callback) {
    return await element.$eval(`[itemprop="${itemProp}"]`, callback)
  }

  static async findPrice(element) {
    return await element.$eval('footer', el =>
      parseInt(
        el.getElementsByTagName('div')[1].innerHTML.replace(/[^0-9.]/g, '')
      )
    )
  }
}

export default DominosParser
