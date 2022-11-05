import styles from '../styles/pages/FoodPage.module.scss'
import { useState } from 'react'
import { api } from '../api'

const FoodPage = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      message,
    }
    api.contact.checkContact(data).then(r => alert(r.isGood))
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
      <textarea
        id="message"
        rows="4"
        onChange={e => setMessage(e.target.value)}
      />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default FoodPage
