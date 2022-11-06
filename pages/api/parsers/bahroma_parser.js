const puppeteer = require('puppeteer')

class BahromaParser {
    static name = 'BAHROMA'

    static async parse(message) {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()
        await page.goto('https://www.bahroma1.ru/all-menu.html')

        const items = []
        const elements = await page.$$('.catalog-item', el => el)
        for (let i = 0; i < elements.length; i++) {
            const name = await elements[i].$eval(
                '.catalog-item__title',
                el => el.innerText
            )
            const description = await elements[i].$eval(
                '.catalog-item__price',
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

export default BahromaParser
