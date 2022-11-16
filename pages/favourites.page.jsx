// noinspection JSUnusedGlobalSymbols

import SearchResGallery from '../components/SearchResGallery/SearchResGallery'
import { useSelector } from 'react-redux'
import styles from '../styles/pages/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Favourites = () => {
  const favsArr = useSelector(state => state.saved.items.favouritesArr)

  return (
    <div className={styles.container}>
      favs page
      <Link href={'/'}>
        <a>
          <FontAwesomeIcon icon={faBackward} fontSize={'2rem'} />
        </a>
      </Link>
      <SearchResGallery data={favsArr} />
      {/*todo: вынести надписи про запрос из компоненты*/}
    </div>
  )
}

export default Favourites
