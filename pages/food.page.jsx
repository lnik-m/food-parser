import styles from '../styles/pages/FoodPage.module.scss'
import { useState } from 'react'
import { api } from '../api'
import TextBlock from '../components/TextBlock/TextBlock'

const FoodPage = () => {
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = e => {
    setLoading(true)
    e.preventDefault()
    const data = {
      message
    }
    api.contact
      .doSearch(data)
      .then(r => setData(r.data))
      .then(() => setLoading(false))
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <textarea
          id="message"
          placeholder='пицца'
          rows="4"
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        data.map(site => (
          <div key={site.name}>
            <h3>Сайт: {site.name}</h3>
            {site?.items?.map(el => (
              <TextBlock key={el.name}>
                <strong>
                  Найдено по: {el.foundBy === 'name' ? 'имени' : 'описанию'}
                </strong>{' '}
                <br />
                Название: {el.name}
                <br />
                Описание: {el.description}
              </TextBlock>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

export default FoodPage
