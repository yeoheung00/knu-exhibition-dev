'use client'
import { useState } from 'react';
import styles from './projects.module.css'
import Tab from './tab';
import WorkItem from './workItem';

export default function Projects({ subjectList, workList }: { subjectList: string[], workList: { title: string, category: string, designer: number, url: string }[] }) {
  const [current, setCurrent] = useState(subjectList[0]);
  return (
    <div className={styles.root}>
      <Tab list={subjectList} current={current} setCurrent={setCurrent} />
      <div className={styles.listViewer}>
        <div className={styles.listwrap}>
          {
            workList.map((item, index) => item.category == current ? <WorkItem key={index} url={item.url} title={item.title} designer={item.designer} /> : null)
          }
        </div>
      </div>
    </div>
  )
}