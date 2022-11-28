// noinspection JSUnusedGlobalSymbols

import SearchResGallery from '../components/SearchResGallery/SearchResGallery'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'
import styles from '../styles/pages/FavouritesPage.module.scss'

const Favourites = () => {
  const favsArr = useSelector(state => state.saved.items.favouritesArr)

  return (
    <Layout>
      {favsArr.length ? (
        <SearchResGallery data={favsArr} />
      ) : (
        <div className={styles.noFavs}>
          Пока ничего не добавлено в избранное :(
        </div>
      )}
    </Layout>
  )
}

export default Favourites
