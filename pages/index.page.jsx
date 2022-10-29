import Link from 'next/link'

import styles from '../styles/pages/Home.module.scss'

import MainButton from '../components/MainButton/MainButton'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>It is main page</h1>

      <h3>It is button</h3>
      <MainButton link={'/food'}>Food page</MainButton>

      <h3>It is using of Link (inside our app)</h3>
      <Link href="/food.page">
        <a>Way to food page</a>
      </Link>
    </div>
  )
}

export default Home
