import styles from './page.module.css'
import Interactive from 'components/main/interactive'

export default function Home() {
  return (
    <div className={styles.root}>
      <Interactive/>
    </div>
  )
}
