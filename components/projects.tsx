'use client'
import { useState } from 'react';
import styles from './projects.module.css'
import Tab from './tab';

export default function Projects({ subjectList, workList }: { subjectList: string[], workList: {}[] }) {
  const [currenet, setCurrent] = useState(subjectList[0]);
  return (
    <div className={styles.root}>
      <Tab list={subjectList} current={currenet} setCurrent={setCurrent}/>
      <div className={styles.workwrap}>
        
      </div>
    </div>
  )
}