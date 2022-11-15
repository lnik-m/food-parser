// noinspection JSUnusedGlobalSymbols


import SearchResGallery from '../components/SearchResGallery/SearchResGallery'
import { useSelector } from 'react-redux'
import styles from '../styles/pages/Home.module.scss'

const Favourites = () => {
  const favsArr = useSelector(state => state.items.favouritesArr)

  return (
    <div className={styles.container}>
      favs page
      <SearchResGallery data={favsArr} />
      {/*todo: вынести надписи про запрос из компоненты*/}
    </div>
  )
}

export default Favourites
