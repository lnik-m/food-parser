// noinspection JSUnusedGlobalSymbols
import Layout from '../components/Layout/Layout'
import { useState } from 'react'
import Loading from '../components/Loading/Loading'
import { api } from '../api'

const DeveloperPage = () => {
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()

    api.search.updateDb().then(() => setLoading(false))
  }
  return (
    <Layout>
      <button
        onClick={handleSubmit}
        style={{ margin: 20, backgroundColor: '#110138', color: 'white' }}
      >
        Update DB
      </button>
      {isLoading && <Loading />}
    </Layout>
  )
}

export default DeveloperPage
