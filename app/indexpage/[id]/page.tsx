import Worksum from '@/components/worksum';
import styles from './page.module.css'
import db from 'db/data.json'

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  return (
    <main className={styles.root}>
      <div className={styles.profile}>
        <img src={`/profile/${id}/cake.jpg`} alt='cake' />
        <div className={styles.intro}>
          <p className={styles.name}>{db.graduate[id].name}<span className={styles.major}>{db.graduate[id].major}디자인전공</span></p>
          <div className={styles.contactwrap}>
            {db.graduate[id].insta == "none" ? null :
              <div className={styles.contact}>
                <div className={styles.insta} />
                <p>{db.graduate[id].insta}</p>
              </div>
            }
            <div className={styles.contact}>
              <div className={styles.email} />
              <p>{db.graduate[id].email}</p>
            </div>
          </div>
          <p>{db.graduate[id].des}</p>
        </div>
      </div>
      <div className={styles.works}>
        {db.graduate[id].work_list.map(item=><Worksum id={id} data={item}/>)}
      </div>
    </main>
  )
}