// noinspection JSUnusedGlobalSymbols

import styles from '../styles/pages/Home.module.scss'

import SearchBlock from '../components/SearchBlock/SearchBlock'
import Loading from '../components/Loading/Loading'


const Home = () => {
  return (
    <div className={styles.container}>
      <SearchBlock placeholder={'пицца'} />


      {/*todo: написать стили в файле Layout.module.scss, чтобы она крутилась, после - отсюда удалить*/}
      <Loading />
    </div>
  )
}

export default Home
