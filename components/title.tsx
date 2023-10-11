import styles from "./title.module.css"

export default function Title(data: {title: any, align: string}){
  return(
    <div className={styles.root}>
      <div className={styles.box} data-align={data.align}></div>
      {data.title}
      <div className={styles.box} data-align={data.align}></div>
    </div>
  )
}