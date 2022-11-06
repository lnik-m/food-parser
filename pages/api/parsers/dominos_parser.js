const puppeteer = require('puppeteer')

class DominosParser {
  static name = 'DominosPizza'

  static async parse(message) {
    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true
    })
    const page = await browser.newPage()
    await page.goto('https://spb.dominospizza.ru/', {
      waitUntil: 'domcontentloaded'
    })

    let items = (
      await Promise.all(
        (
          await page.$$('[itemprop="name"]')
        ).map(async el => await el.evaluate(el => el.innerHTML))
      )
    ).map(el => ({ name: el, description: '', foundBy: '' }))

    const descriptions = await Promise.all(
      (
        await page.$$('[itemprop="description"]')
      ).map(async el => {
        return await el.evaluate(el => el.innerHTML)
      })
    )

    for (let i = 0; i < descriptions.length; i++) {
      items[i].description = descriptions[i]
    }
    items = items
      .filter(
        item =>
          this.checkIncluding(item.name, message) ||
          this.checkIncluding(item.description, message)
      )
      .map(item =>
        this.checkIncluding(item.name, message)
          ? { ...item, foundBy: 'name' }
          : { ...item, foundBy: 'description' }
      )
    await page.close()
    await browser.close()
    return items
  }

  static checkIncluding(source, element) {
    return source.toLowerCase().includes(element.toLowerCase())
  }
}

export default DominosParser
