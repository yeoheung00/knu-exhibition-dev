import Link from 'next/link';
import styles from './item.module.css'

type itemProps = {
  id: number,
  name: string,
  nameEng: string,
  email: string
};

export default function Item({ id, name, nameEng, email }: itemProps) {
  return (
    <Link href={`/profilepage/${id}`} className={styles.root}>
      <div className={styles.namewrap}>
        <h3 className={styles.name}>{name}</h3>
        <h3 className={styles.name}>{nameEng}</h3>
      </div>
      <div className={styles.contact}>
        <div style={{
          maskImage: "url('/icons/email.svg')",
          WebkitMaskImage: "url('/icons/email.svg')",
          width: '24px',
          height: '24px',
          backgroundColor: 'var(--accent)'
        }} />
        <p>{email}</p>
      </div>

    </Link>
  );
}