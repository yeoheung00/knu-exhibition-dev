import styles from "./title.module.css"

export default function Title(data: {title: any}){
  return(
    <div className={styles.root}>
      {data.title}
      <div className={styles.box}></div>
    </div>
  )
}