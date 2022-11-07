import styles from './SearchBlock.module.scss'

 const SearchBlock = ({children}) =>
 {
    return (
        <form>
        <textarea className={styles['search-block']}
          id="message"
          placeholder='лолипопс'
          rows={4}
        />
        <button className={styles.button} type="submit">{children}Send</button>
      </form>
    )
    
 }
 
 export default SearchBlock