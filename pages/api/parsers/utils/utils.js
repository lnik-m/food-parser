import chromium from 'chrome-aws-lambda'
import puppeteerCore from 'puppeteer-core'

// Function for autoscroll while parsing
// Note: some content can't be loaded if page isn't scrolled to it
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0
      const distance = 100
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight
        window.scrollBy(0, distance)
        totalHeight += distance

        if (totalHeight >= scrollHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 100)
    })
  })
}

const getBrowser = async () => {
  try {
    const executablePath = await chromium.executablePath
    if (executablePath != null) {
      return await puppeteerCore.launch({
        headless: true,
        executablePath,
        args: [...chromium.args, '--disable-web-security'],
        defaultViewport: chromium.defaultViewport,
        ignoreHTTPSErrors: true,
        ignoreDefaultArgs: ['--disable-extensions']
      })
    } else {
      const puppeteer = require('puppeteer')
      return await puppeteer.launch({
        headless: true
      })
    }
  } catch (e) {
    console.log(e)
  }
}

function sortByPrice(x, y) {
  return x.price - y.price
}

function checkIncluding(source, element) {
  return source.toLowerCase().includes(element.toLowerCase())
}

export { autoScroll, getBrowser, sortByPrice, checkIncluding }
