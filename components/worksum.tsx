import styles from './worksum.module.css'

type dataType = {
  id: number,
  data: {
    title: string,
    des: string,
    img: number
  }
}

export default function worksum(data: dataType) {
  const { id, data:{title, des, img} } = data;
  const imgs = Array.from({length: img}, (_, i)=> `${i}.jpg`);
  console.log(imgs);
  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <p>{des}</p>
      <div className={styles.imgs}>
        {
          imgs.map(item=><img src={`/profile/${id}/${title}/${item}`}/>)
        }
      </div>
    </div>
  )
}