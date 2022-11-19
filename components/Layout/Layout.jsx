import styles from './Layout.module.scss'
import Header from '../Header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header className={styles.header} />
      <div className={styles.container}>{children}</div>
    </>
  )
}

export default Layout
