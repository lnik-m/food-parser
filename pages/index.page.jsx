import Link from 'next/link'

import styles from '../styles/pages/Home.module.scss'

import MainButton from '../components/MainButton/MainButton'
import { useEffect, useState } from 'react'
import TextBlock from '../components/TextBlock/TextBlock'

const Home = () => {
  const [food, setFood] = useState([])
  const fetchFood = () => {
    return fetch('/api/food')
      .then(r => r.json())
      .then(r => r)
  }

  useEffect(() => {
    fetchFood().then(r => setFood(r.groceries))
  })

  return (
    <div className={styles.container}>
      <h1>It is main page</h1>

      <h3>It is button</h3>
      <MainButton link={'/food'}>Food page</MainButton>

      <h3>It is using of Link (inside our app)</h3>
      <Link href="/food">
        <a>Way to food page</a>
      </Link>

      <h3>Groceries from api</h3>
      {food.map(el => (
        <TextBlock>{el}</TextBlock>
      ))}
    </div>
  )
}

export default Home
