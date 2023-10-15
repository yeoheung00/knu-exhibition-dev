import Link from 'next/link';
import styles from './workItem.module.css'
import { Post } from 'contentlayer/generated';
import graduate from 'db/graduate.json'
import Image from 'next/image';

export default function WorkItem(post: Post){
  const index = post.url.split('/').at(-1);
  console.log(`/profile/${post.designer}/${index}/thumb.jpg`);
  return(
    <Link className={styles.root} href={post.url}>
      <Image className={styles.thumb} src={`/profile/${post.designer}/${index}/thumb.jpg`} alt='thumbnail' sizes="100vw" width={300} height={300}/>
      <h2 className={styles.title}>{post.title}</h2>
      <h3 className={styles.designer}>{graduate[post.designer].name}</h3>
    </Link>
  )
}