import SearchResBlock from '../SearchResBlock/SearchResBlock'
import { useSelector } from 'react-redux'


const SearchResGallery = ({data}) => {
  const currentSearch = useSelector(state => state.search.currentSearch)
  const currentSearchNumber = useSelector(state => state.search.countSearch)

  // todo: убрать название сайта отсюда, когда изменятся данные
  return (
    data.length > 0 ?
      data.map(site => (
        <div key={site.name}>
          <h3>Сайт: {site.name}</h3>
          {site?.items?.map(el => (
            <SearchResBlock item={el} key={el.name}/>
          ))}
        </div>
      ))
      : (currentSearch.length < 3 && currentSearchNumber > 0) ?
      <div>Ваш запрос должен состоять из 3 и более символов</div>
      : currentSearch.length > 3 ?
      <div>По вашему запросу &quot;{currentSearch}&quot; ничего не найдено</div>
      : <></>
  )
}

export default SearchResGallery;