import styles from './TextBlock.module.scss'

const TextBlock = ({ children }) => {
  return <div className={styles.text_block}>{children}</div>
}

export default TextBlock
