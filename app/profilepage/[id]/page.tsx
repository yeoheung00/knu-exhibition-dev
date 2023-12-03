import styles from './page.module.css'
import db from 'db/graduate.json'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link';

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const posts = allPosts.filter((item) => item.designer == id ? item : null);
  const images = new Array(db[id].link.length).fill(0).map((item, idx) => (idx + 1).toString().padStart(2, '0') + '.jpg');
  return (
    <main className={styles.root}>
      <div className={styles.profilewrap}>

        <img className={styles.image} src={`/profile/${id}/profile.jpg`} alt='profile' />

        <div className={styles.container}>

          <div className={styles.contentswrap}>
            <h1>Designer</h1>
            <div className={styles.contents}>
              <h2 className={styles.name}>{db[id].name}<br />{db[id].name_eng}</h2>
              <p dangerouslySetInnerHTML={{ __html: db[id].des }}></p>
            </div>
          </div>

          <div className={styles.contentswrap}>
            <h1>Contact</h1>
            <div className={styles.contents}>
              {db[id].insta == "none" ? null :
                <div className={styles.contactitem}>
                  <div className={styles.insta} />
                  <p>{db[id].insta}</p>
                </div>
              }
              <div className={styles.contactitem}>
                <div className={styles.email} />
                <p>{db[id].email}</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className={styles.images}>
        {
          images.map((item, idx) => (
            <Link key={idx} href={db[id].link[idx].startsWith("http") ? db[id].link[idx] : "/profilepage/"+id+db[id].link[idx]} target='_blank' style={{position: "relative", pointerEvents: db[id].link[idx].startsWith("http") ? "auto" : "none"}}>
              <img id={item} src={`/profile/${id}/${item}`} alt={item} />
              <img src="/play.png" style={{
                width: "12%",
                aspectRatio: "1/1",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                display: db[id].link[idx].startsWith("http") ? "block" : "none"
              }}/>
            </Link>
          ))
        }
      </div>
    </main>
  )
}