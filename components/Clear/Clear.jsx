import styles from './Clear.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

const Clear = ({children, clearHandler}) => {
  const dispatch = useDispatch()

  return (
  <div className={styles.clear}>
    <FontAwesomeIcon
      onClick={() => dispatch(clearHandler())}
      icon={faTrash}
      fontSize={'2rem'}
      color={'rgb(184 100 167)'}
      cursor={'pointer'}
    />
    <p>{children}</p>
  </div>
  )
}

export default Clear
