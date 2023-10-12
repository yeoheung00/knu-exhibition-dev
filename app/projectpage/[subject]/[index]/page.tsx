import styles from './page.module.css'

export default function Index({params}: {params: {index: string}}){
  const {index} = params;
  return(
    <div className={styles.root}>
      <h1>{index}</h1>
    </div>
  )
}