import styles from './TextBlock.module.scss'

const TextBlock = ({ children }) => {
  return <div className={styles['text-block']}>{children}</div>
}

export default TextBlock
