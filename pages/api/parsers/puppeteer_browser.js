const getBrowser = async () => {
  try {
    const PCR = require('puppeteer-chromium-resolver')
    const option = {
      revision: '',
      detectionPath: '',
      folderName: '.chromium-browser-snapshots',
      defaultHosts: [
        'https://storage.googleapis.com',
        'https://npm.taobao.org/mirrors'
      ],
      hosts: [],
      cacheRevisions: 2,
      retry: 3,
      silent: false
    }
    const stats = await PCR(option)
    return await stats.puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
      executablePath: stats.executablePath
    })
  } catch (e) {
    console.log(e)
  }
}

export { getBrowser }
