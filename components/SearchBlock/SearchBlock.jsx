import styles from './SearchBlock.module.scss'
import { useState } from 'react'
import { api } from '../../api'
import SearchResGallery from '../SearchResGallery/SearchResGallery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Loading from '../Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { addSearch } from '../../slices/searchSlice'
import { countSearch } from '../../slices/countSearchSlice'

const SearchBlock = ({ placeholder }) => {
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const searchArr = useSelector(state => state.saved.search.searchArr)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()

    const data = {
      message
    }

    dispatch(addSearch(message))
    dispatch(countSearch())

    api.search
      .doSearch(data)
      .then(r => setData(r.data))
      .then(() => setLoading(false))
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            list="historySearch"
            type="text"
            className={styles.input}
            id="message"
            placeholder={placeholder}
            autoComplete={'off'}
            onChange={e => setMessage(e.target.value)}
            disabled={isLoading}
            autoFocus
          />

          <datalist id="historySearch">
            {[searchArr.map(item => <option key={item} value={item}></option>)]}
          </datalist>

          <button
            className={styles.button}
            type={'submit'}
            disabled={isLoading}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>

      <div id="historySearch">
        {searchArr?.map(item => (
          <div key={item}>
            <ul>
              <li className={styles.li}>
                <a href="">{item}</a>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <SearchResGallery className={styles.result} data={data} />
      )}
    </div>
  )
}

export default SearchBlock
