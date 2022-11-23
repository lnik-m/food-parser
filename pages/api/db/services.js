import { query as q } from 'faunadb'
import { client } from './client'

async function getRecords() {
  return await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('places')), {
        size: 1000
      }),
      q.Lambda(element => q.Select('data', q.Get(element)))
    )
  )
}

// data is array of items
async function updateRecords(data) {
  await client.query(
    q.Map(
      data,
      q.Lambda(
        'element',
        q.If(
          q.Exists(
            q.Match(q.Index('place_name'), q.Select('name', q.Var('element')))
          ),
          false,
          q.Create(q.Collection('places'), { data: q.Var('element') })
        )
      )
    )
  )
}

export { getRecords, updateRecords }
