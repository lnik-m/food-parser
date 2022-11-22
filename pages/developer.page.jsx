// noinspection JSUnusedGlobalSymbols

import Layout from '../components/Layout/Layout'
import { useState } from 'react'
import Loading from '../components/Loading/Loading'
import { api } from '../api'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/pages/DeveloperPage.module.scss'

const DeveloperPage = () => {
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()

    api.search.updateDb().then(() => setLoading(false))
  }
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.button}>
          <FontAwesomeIcon
            onClick={handleSubmit}
            icon={faRotateRight}
            color={'rgb(184 100 167)'}
          />
          <p>Update DB</p>
        </div>
        {isLoading && <Loading className={styles.loading} />}
      </div>
    </Layout>
  )
}

export default DeveloperPage
