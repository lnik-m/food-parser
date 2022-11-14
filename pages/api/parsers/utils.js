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

function sortByPrice(x, y) {
  return x.price - y.price
}

export { autoScroll, sortByPrice }
