// noinspection JSUnusedGlobalSymbols

import styles from '../styles/pages/Home.module.scss'

import SearchBlock from '../components/SearchBlock/SearchBlock'

const Home = () => {
  return (
    <div className={styles.container}>
      <SearchBlock placeholder={'пицца'} />
    </div>
  )
}

export default Home
