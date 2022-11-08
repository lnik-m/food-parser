import styles from './SearchBlock.module.scss'
import { useState } from 'react'
import { api } from '../../api'
import SearchResGallery from '../SearchResGallery/SearchResGallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Loading from '../Loading/Loading'
import { useDispatch } from 'react-redux'
import { addSearch } from '../../slices/searchSlice'

 const SearchBlock = ({placeholder}) =>
 {
   const [message, setMessage] = useState('')
   const [data, setData] = useState([])
   const [isLoading, setLoading] = useState(false)

   const dispatch = useDispatch()

   const handleSubmit = e => {
     setLoading(true)
     e.preventDefault()

     const data = {
       message
     }

     dispatch(addSearch(message))

     api.contact
       .doSearch(data)
       .then(r => setData(r.data))
       .then(() => setLoading(false))
   }

    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input className={styles.input}
            id="message"
            placeholder={placeholder}
            autoComplete={"off"}
            onChange={e => setMessage(e.target.value)}
          />

          <button className={styles.button} type={'submit'}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        {isLoading ?
          <Loading />
           :
          <SearchResGallery data={data} />
        }
      </div>
    )
 }
 
 export default SearchBlock