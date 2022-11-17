import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { restartSearch } from '../../slices/countSearchSlice'
import { faHeart, faGear } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles.header}>


      <div className={styles.headerContent}>


        <Link href={'/'} >
          <a className={styles.logo}>НайдуЕду</a>
        </Link>

      <div className={styles.links}>
      <Link href={'/favourites'} >
        <a><FontAwesomeIcon onClick={() => dispatch(restartSearch())} icon={faHeart} fontSize={"2rem"} color={"rgb(184 100 167)"}/></a>
      </Link>
      <Link href={'/settings'} >
        <a><FontAwesomeIcon onClick={() => dispatch(restartSearch())} icon={faGear} fontSize={"2rem"} color={"rgb(0,0,0)"}/></a>
      </Link>
    </div>
    </div>

    </div>
  )
}

export default Header
