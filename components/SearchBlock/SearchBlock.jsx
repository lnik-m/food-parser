import MainButton from '../MainButton/MainButton'
import styles from './SearchBlock.module.scss'

 const SearchBlock = ({placeholder}) =>
 {
    return (
        <form>
        <input className={styles["search-Block"]}
          id="message"
          placeholder={placeholder}
        />
        <MainButton>Send</MainButton>
      </form>
    )
    
 }
 
 export default SearchBlock