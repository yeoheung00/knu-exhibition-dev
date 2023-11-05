import styles from './page.module.css'
import db from 'db/graduate.json'
import { allPosts } from 'contentlayer/generated'
import WorkItem from '@/components/workItem';

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const posts = allPosts.filter((item) => item.designer == id ? item : null);
  return (
    <main className={styles.root}>
      <div className={styles.profile}>
        <img src={`/profile/${id}/profile.jpg`} alt='cake' />
        <div className={styles.intro}>
          <h1 className={styles.name}>{db[id].name}<span className={styles.major}>{db[id].major}디자인전공</span></h1>
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
          <h2 className={styles.awardTitle}>수상경력 및 대외활동</h2>
          <ul className={styles.awards}>
            {
              db[id].awards.split('|').map((award, idx) => (
                <li key={idx}>{award}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className={styles.worklist}>
        <div className={styles.workwrap}>
          {
            posts.map((item, index) => <WorkItem key={index} url={item.url} title={item.title} designer={item.designer} />)
          }
        </div>
      </div>
    </main>
  )
}