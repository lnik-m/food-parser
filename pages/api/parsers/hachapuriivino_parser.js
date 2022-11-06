const puppeteer = require('puppeteer')

class HachapuriivinoParser {
    static name = 'Хачапури & Вино'

    static async parse(message) {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        await page.goto('https://www.hachapuriivino.ru/')

        const items = []
        const elements = await page.$$('.goods-detailsbox', el => el)
        for (let i = 0; i < elements.length; i++) {
            const name = await elements[i].$eval(
                '.goods-details-name',
                el => el.innerText
            )
            const description = await elements[i].$eval(
                '.goods-details-price',
                el => el.innerText
            )
            if (name.toLowerCase().includes(message.toLowerCase()))
                items.push({ name: name, description: description, foundBy: 'name' })
            else if (description.toLowerCase().includes(message.toLowerCase()))
                items.push({
                    name: name,
                    description: description,
                    foundBy: 'description'
                })
        }

        await browser.close()
        return items
    }
}

export default HachapuriivinoParser
