// noinspection JSUnusedGlobalSymbols
import { getBrowser } from './puppeteer_browser'

class BahromaParser {

    static async parse(message) {
        const browser = await getBrowser()
        const page = await browser.newPage()
        await page.goto('https://www.bahroma1.ru/all-menu.html', {
            waitUntil: 'domcontentloaded'
        })
        await page.setViewport({
            width: 1200,
            height: 800
        })

        const items = []
        const elements = await page.$$('.catalog-item', el => el)
        for (let i = 0; i < elements.length; i++) {
            const name = await elements[i].$eval(
                '.catalog-item__title',
                el => el.innerText
            )
            const price = await elements[i].$eval(
                '.catalog-item__price',
                el => el.innerText.replace(/[^0-9]/g, '')
            )
            const imgLink = await elements[i].$eval(
                '.catalog-item__image > img',
                el => el.src
            )
            if (name.toLowerCase().includes(message.toLowerCase()))
                items.push({
                    name: name,
                    description: '',
                    price: price,
                    site: {
                        name: 'BAHROMA',
                        link: 'https://www.bahroma1.ru/all-menu.html',
                    },
                    link: '',
                    imgLink: imgLink
                })
        }

        await browser.close()
        return items
    }
}

export default BahromaParser
