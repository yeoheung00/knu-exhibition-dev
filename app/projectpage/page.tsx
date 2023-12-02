import styles from './page.module.css'
import { allPosts } from "contentlayer/generated";
import Projects from '@/components/projects';

export default function ProjectPage() {
  const posts = allPosts.sort();

  type typeC = {
    [k: string]: string
  }
  const category: typeC = {
    'package': '패키지디자인',
    'editorial': '시각정보디자인',
    'multimedia': '멀티미디어디자인',
    'visualproject': '비쥬얼디자인프로젝트',
    'advertisement': '광고디자인',
    'product_pi': '제품 PI/영상',
    'product_main': '제품 메인'
  }
  const subject_all = allPosts.map((item) => item.category);
  const subjectList = subject_all.filter((item, index) => { return subject_all.indexOf(item) === index }).sort();
  const subjects = subjectList.map(item => category[item]);
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
      <Projects subjectList={subjects} workList={workList} />
    </div>
  )
}