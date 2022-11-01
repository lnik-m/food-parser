import styles from './CounterShow.module.scss'
import { useSelector } from 'react-redux'

const CounterShow = () => {
  const counter = useSelector(state => state.counter.value)

  return <div className={styles['text-block']}>Counter is {counter}</div>
}

export default CounterShow
