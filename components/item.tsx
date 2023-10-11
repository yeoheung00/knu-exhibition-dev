import Link from 'next/link';
import styles from './item.module.css'

type itemProps = {
  id: number,
  name: string,
  major: string
  work: string
};

export default function Item(data: itemProps) {
  const { id, name, major, work } = data;
  return (
    <div className={styles.root}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.major}>{major}디자인전공</p>
      <p className={styles.work}>{work}</p>
      <Link className={styles.link} href={`/indexpage/${id}`}></Link>
    </div>
  );
}