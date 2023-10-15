import styles from './worklist.module.css'
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";


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

export default function WorkList(){
  const posts = allPosts.sort();
  const subject_all = allPosts.map((item) => item.category);
  const subjectList = subject_all.filter((item, index) => { return subject_all.indexOf(item) === index }).sort();
  return (
    <div className={styles.root}>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
    </div>
  )
}