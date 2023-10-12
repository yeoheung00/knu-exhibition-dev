import Link from 'next/link';
import styles from './workItem.module.css'

type PropType = {
  subject: string,
  index: string,
  title: string,
  designer: string
}
export default function WorkItem(props: PropType){
  const {subject, index, title, designer} = props;
  return(
    <Link className={styles.root} href={`/projectpage/${subject}/${index}`}>
      <img className={styles.thumb} src={`/works/${subject}/${index}/thumb.jpg`} alt='thumbnail'/>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.designer}>{designer}</h3>
    </Link>
  )
}