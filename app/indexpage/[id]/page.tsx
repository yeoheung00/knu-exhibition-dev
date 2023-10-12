import Worksum from '@/components/worksum';
import styles from './page.module.css'
import db from 'db/graduate.json'

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <main className={styles.root}>
      <div className={styles.profile}>
        <img src={`/profile/${id}/cake.jpg`} alt='cake' />
        <div className={styles.intro}>
          <p className={styles.name}>{db[id].name}<span className={styles.major}>{db[id].major}디자인전공</span></p>
          <div className={styles.contactwrap}>
            {db[id].insta == "none" ? null :
              <div className={styles.contact}>
                <div className={styles.insta} />
                <p>{db[id].insta}</p>
              </div>
            }
            <div className={styles.contact}>
              <div className={styles.email} />
              <p>{db[id].email}</p>
            </div>
          </div>
          <p>{db[id].des}</p>
        </div>
      </div>
    </main>
  )
}