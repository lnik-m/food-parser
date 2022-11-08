import MainButton from '../MainButton/MainButton'
import styles from './SearchBlock.module.scss'

 const SearchBlock = ({placeholder}) =>
 {
    return (
        <form>
        <input className={styles.searchBlock}
          id="message"
          placeholder={placeholder}
        />
        <MainButton>Send</MainButton>
      </form>
    )
    
 }
 
 export default SearchBlock