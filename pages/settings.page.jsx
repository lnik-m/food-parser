// noinspection JSUnusedGlobalSymbols
import Layout from '../components/Layout/Layout'
import { clearFavourite } from '../slices/itemsSlice'
import styles from '../styles/pages/SettingsPage.module.scss'
import { clearSearchHistory } from '../slices/searchSlice'
import Clear from '../components/Clear/Clear'

const Settings = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Clear clearHandler={clearFavourite}>очистить избранное</Clear>
        <Clear clearHandler={clearSearchHistory}>очистить историю поиска</Clear>
      </div>
    </Layout>
  )
}

export default Settings
