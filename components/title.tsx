
import styles from "./title.module.css"

export default function Title({ title }: { title: any }) {
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <img src="/animation.gif"/>
      </div>
      <h1>{title}</h1>
    </div>
  )
}