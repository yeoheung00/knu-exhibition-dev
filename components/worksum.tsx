import styles from './worksum.module.css'

type dataType = {
  index: number,
  data: {
    id: string,
    title: string,
    des: string
  }
}

export default function worksum(data: dataType) {
  const {index, data:{id, title, des} } = data;
  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <p>{des}</p>
      <img className={styles.imgs} src={`/profile/${index}/${id}/thumb.jpg`}/>
    </div>
  )
}