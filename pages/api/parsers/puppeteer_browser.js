import chromium from 'chrome-aws-lambda'
import puppeteerCore from 'puppeteer-core'

const getBrowser = async () => {
  try {
    const executablePath = await chromium.executablePath
    if (executablePath != null) {
      return await puppeteerCore.launch({
        args: chromium.args,
        headless: true,
        executablePath
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

export { getBrowser }
