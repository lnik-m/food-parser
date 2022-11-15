import SearchResBlock from '../SearchResBlock/SearchResBlock'
import { useSelector } from 'react-redux'
import styles from './SearchResGallery.module.scss'


const SearchResGallery = ({data}) => {
  const currentSearch = useSelector(state => state.search.currentSearch)
  const currentSearchNumber = useSelector(state => state.search.countSearch)

  return (
    <div className={styles.container}>
      {data?.length > 0 ?
      data.map(el => (
        <SearchResBlock key={el.name} item={el} />
      ))
        // todo: оно уехало
      : (currentSearch.length < 3 && currentSearchNumber > 0) ?
      <div>Ваш запрос должен состоять из 3 и более символов</div>
      : currentSearch.length > 3 ?
      <div>По вашему запросу &quot;{currentSearch}&quot; ничего не найдено</div>
      : <></>}
    </div>
  )
}

export default SearchResGallery;

