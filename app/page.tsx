import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>PIECE<br/>OF<br/>CAKE</h1>
      <img className={styles.image} src="asset01.png" alt='asset01'/>
    </div>
  )
}
