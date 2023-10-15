// 'use client'
// import { useState } from "react"
// import { Post, allPosts } from 'contentlayer/generated'
// import styles from "./page.module.css"
// import Tab from "components/tab"
// import WorkItem from "@/components/workItem"
// import Link from "next/link"

// function PostCard(post: Post) {

//   return (
//     <div className="mb-8">
//       <h2 className="m-12 text-4xl text-red-600">
//         <Link
//           href={post.url}
//           className="text-blue-700 hover:text-blue-900"
//           legacyBehavior>
//           {post.title}
//         </Link>
//       </h2>
//     </div>
//   );
// }

// export default function Project() {
//   const posts = allPosts.sort();
//   //const subject_all = allPosts.map((item) => item.category);
//   //const subjectList = subject_all.filter((item, index) => { return subject_all.indexOf(item) === index }).sort();
//   const [current, setCurrent] = useState('advertising');
//   return (
//     <div className={styles.root}>
//       {/* <Tab setCurrent={setCurrent} list={subjectList} current={current} /> */}
//       <div className={styles.listViewer}>
//         <div className={styles.listwrap}>
//         {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))}
//           {/* {
//             allPosts.sort((a, b) => {
//               if (a.title > b.title) return 1;
//               if (a.title < b.title) return -1;
//               return 0;
//             }).map((item, index) =>
//               item.category == current ? <WorkItem key={index} url={item.url} title={item.title} designer={item.designer} /> : null
//             )
//           } */}
//         </div>
//       </div>
//     </div>
//   )
// }

import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import styles from "./page.module.css"

function PostCard(post: Post) {

  return (
    <div className="mb-8">
      <h2 className="m-12 text-4xl text-red-600">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort();
  const subject_all = allPosts.map((item) => item.category);
  const subjectList = subject_all.filter((item, index) => { return subject_all.indexOf(item) === index }).sort();

  return (
    <div className={styles.root}>
      <div className={styles.listViewer}>
        <div className={styles.listwrap}>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
