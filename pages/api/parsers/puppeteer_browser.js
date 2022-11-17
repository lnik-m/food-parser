import chromium from 'chrome-aws-lambda'
import puppeteerCore from 'puppeteer-core'

const getBrowser = async () => {
  try {
    const executablePath = await chromium.executablePath
    if (executablePath != null) {
      return await puppeteerCore.launch({
        headless: true,
        executablePath,
        args: [...chromium.args, "--disable-web-security"],
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

export { getBrowser }
