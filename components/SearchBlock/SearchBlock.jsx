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
import DatalistInput from 'react-datalist-input'

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

  const items = []
  for (let i=0; i<searchArr.length; i++) {
    items.push({
      id: i,
      value: searchArr[i].toString(),
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <DatalistInput
            id={'datalist'}
            value={message}
            setValue={setMessage}
            label={placeholder}
            showLabel={false}
            items={items}
            onSelect={(item) => setMessage(item.value)}
            aria-disabled={isLoading}
            inputProps={{
              className: styles.input,
            }}
            listboxOptionProps={{
              className: styles.listboxOpt,
            }}
          />

          <button
            className={styles.button}
            type={'submit'}
            disabled={isLoading}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
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
