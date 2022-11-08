import styles from './Loading.module.scss'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  )
}

export default Loading;