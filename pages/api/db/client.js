import faunadb from 'faunadb'

const client = new faunadb.Client({
  secret: process.env.SECRET_KEY
})

export { client }
