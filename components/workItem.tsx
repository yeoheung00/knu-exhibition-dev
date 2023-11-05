import Link from 'next/link';
import styles from './workItem.module.css'
import graduate from 'db/graduate.json'
import Image from 'next/image';

type PropsType = {
  url: string;
  title: string;
  designer: number;
}

export default function WorkItem(post: PropsType) {
  const index = post.url.split('/').at(-1);
  return (
    <div className={styles.root}>
    <Link className={styles.container} href={post.url}>
      <Image className={styles.thumb} src={`/profile/${post.designer}/${index}/thumb.jpg`} alt='thumbnail' width={1000} height={1000} />
      <div className={styles.des}>
        <h2 className={styles.title}>{post.title}</h2>
        <h3 className={styles.designer}>{graduate[post.designer].name}</h3>
      </div>
    </Link>
    </div>
  )
}