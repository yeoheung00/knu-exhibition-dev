import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.root}>
      <img className={styles.image} src="asset01.png" alt='asset01'/>
    </div>
  )
}
