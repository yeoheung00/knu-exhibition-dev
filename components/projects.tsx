'use client'
import { useState } from 'react';
import styles from './projects.module.css'
import Tab from './tab';
import WorkItem from './workItem';

export default function Projects({ subjectList, workList }: { subjectList: string[], workList: { title: string, category: string, designer: number, url: string }[] }) {
  const [current, setCurrent] = useState(subjectList[0]);

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
  return (
    <div className={styles.root}>
      <Tab list={subjectList} current={current} setCurrent={setCurrent} />
      <div className={styles.divider} />
      <div className={styles.listViewer}>
        <div className={styles.listwrap}>
          {
            workList.map((item, index) => category[item.category] == current ? <WorkItem key={index} url={item.url} title={item.title} designer={item.designer} /> : null)
          }
        </div>
      </div>
    </div>
  )
}