import { addFavourite, deleteFavourite } from '../../slices/itemsSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from './Favourite.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const Favourite = ({ item }) => {
  const favArr = useSelector(state => state.saved.items.favouritesArr)

  const dispatch = useDispatch()

  const [isFav, setIsFav] = useState(
    !!favArr.filter(el => el?.name === item?.name).length
  )

  const handleClick = () => {
    if (isFav) {
      dispatch(deleteFavourite(item))
      setIsFav(!isFav)
    } else {
      dispatch(addFavourite(item))
      setIsFav(!isFav)
    }
  }

  return (
    <>
      <button onClick={handleClick} className={styles.heart}>
<<<<<<< HEAD
        {isFav ?
          <FontAwesomeIcon icon={faHeart} color={"rgb(184 100 167)"}/> :
          <FontAwesomeIcon icon={faHeart} color={"white"}/>
        }
=======
        {isFav ? (
          <FontAwesomeIcon icon={faHeart} color={'rgb(183,56,56)'} />
        ) : (
          <FontAwesomeIcon icon={faHeart} color={'white'} />
        )}
>>>>>>> 360beaf (get and post to fauna db)
      </button>
    </>
  )
}

export default Favourite
