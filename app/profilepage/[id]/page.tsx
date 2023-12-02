import styles from './page.module.css'
import db from 'db/graduate.json'
import { allPosts } from 'contentlayer/generated'
import WorkItem from '@/components/workItem';

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const posts = allPosts.filter((item) => item.designer == id ? item : null);
  const images = new Array(db[id].image).fill(0).map((item, idx) => (idx + 1).toString().padStart(2, '0') + '.jpg');
  return (
    <main className={styles.root}>
      <div className={styles.profilewrap}>
        <div className={styles.image}>
        <img src={`/profile/${id}/profile.jpg`} alt='cake' />
      </div>
      <div className={styles.container}>

        <div className={styles.profile}>
          <div className={styles.intro}>
            <h1 className={styles.name}>{db[id].name} {db[id].name_eng}</h1>
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
        <h2 className={styles.worktitle}>졸업작품</h2>
        <div className={styles.worklist}>
          <div className={styles.workwrap}>
            {
              posts.map((item, index) => <WorkItem key={index} url={item.url} title={item.title} designer={item.designer} />)
            }
          </div>
        </div>
      </div>
      </div>
      

      <div className={styles.images}>
        {
          images.map((item, idx) => (
            <img key={idx} src={`/profile/${id}/${item}`} alt={item} />
          ))
        }
      </div>
    </main>
  )
}