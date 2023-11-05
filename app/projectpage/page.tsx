import styles from './page.module.css'
import { allPosts } from "contentlayer/generated";
import Projects from '@/components/projects';

export default function ProjectPage() {
  const posts = allPosts.sort();
  const subject_all = allPosts.map((item) => item.category);
  const subjectList = subject_all.filter((item, index) => { return subject_all.indexOf(item) === index }).sort();
  const workList = posts.map((item, index) => {
    return {
      title: item.title,
      category: item.category,
      designer: item.designer,
      url: item.url
    };
  }).sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
  return (
    <div className={styles.root}>
      <Projects subjectList={subjectList} workList={workList} />
    </div>
  )
}