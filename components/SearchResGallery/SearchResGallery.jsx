import SearchResBlock from '../SearchResBlock/SearchResBlock'
import { useSelector } from 'react-redux'
import styles from './SearchResGallery.module.scss'

const SearchResGallery = ({ data }) => {
  const currentSearch = useSelector(state => state.saved.search.currentSearch)
  const currentSearchNumber = useSelector(state => state.count.countSearch)

  return (
    <>
      {data?.length > 0 ? (
        <div className={styles.container}>
          {data.map(el => (
            <SearchResBlock key={el?.name} item={el} />
          ))}
        </div>
      ) : currentSearchNumber === 0 ? (
        <></>
      ) : currentSearch.length < 3 && currentSearchNumber > 0 ? (
        <div>Ваш запрос должен состоять из 3 и более символов</div>
      ) : currentSearch.length > 3 ? (
        <div>
          По вашему запросу <strong>&quot;{currentSearch}&quot;</strong> ничего
          не найдено
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default SearchResGallery
