// noinspection JSUnusedGlobalSymbols

import SearchResGallery from '../components/SearchResGallery/SearchResGallery'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout/Layout'

const Favourites = () => {
  const favsArr = useSelector(state => state.saved.items.favouritesArr)

  return (
    <Layout>
      <SearchResGallery data={favsArr} />
      {/*todo: вынести надписи про запрос из компоненты*/}
    </Layout>
  )
}

export default Favourites
