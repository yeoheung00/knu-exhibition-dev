import Link from 'next/link';
import styles from './workItem.module.css'
import graduate from 'db/graduate.json'
import Image from 'next/image';

type PropsType ={
  url: string;
  title: string;
  designer: number;
}

export default function WorkItem(post: PropsType){
  const index = post.url.split('/').at(-1);
  return(
    <Link className={styles.root} href={post.url}>
      <Image className={styles.thumb} src={`/profile/${post.designer}/${index}/thumb.jpg`} alt='thumbnail' sizes="100vw" width={300} height={300}/>
      <h2 className={styles.title}>{post.title}</h2>
      <h3 className={styles.designer}>{graduate[post.designer].name}</h3>
    </Link>
  )
}