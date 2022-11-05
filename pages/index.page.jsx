import Link from 'next/link'

import styles from '../styles/pages/Home.module.scss'

import MainButton from '../components/MainButton/MainButton'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../slices/counterSlice'
import TextBlock from '../components/TextBlock/TextBlock'
import CounterShow from '../components/CounterShow/CounterShow'

import {api} from '../api'

const Home = () => {
  const [food, setFood] = useState([])

  useEffect(() => {
    api.food.get.getGroceries().then(r => setFood(r.groceries))
  })

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

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
        <TextBlock key={el}>{el}</TextBlock>
      ))}

      <h3>It is redux using</h3>
      <div>
        <p>the value of count is {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <p>Component that takes counter value from state</p>
      <CounterShow />
    </div>
  )
}

export default Home
