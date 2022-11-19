import faunadb, { query as q } from 'faunadb'

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

async function Post(data) {
  const client = new faunadb.Client({
    secret: 'fnAE1ocgN0ACSRS3p2r4IcwbBg71cWeblF09v58j'
  })

  const documents = await client.query(
    q.Paginate(q.Match(q.Index('place_name'), data.name))
  )

  if (documents.data.length == 0)
    client.query(q.Create(q.Collection('places'), { data }))
}

async function Get() {
  const client = new faunadb.Client({
    secret: 'fnAE1ocgN0ACSRS3p2r4IcwbBg71cWeblF09v58j'
  })

  const allDocuments = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('places')), {
        size: 1000
      }),
      q.Lambda(x => q.Get(x))
    )
  )
  return allDocuments
}

export { autoScroll, sortByPrice, Post, Get }
