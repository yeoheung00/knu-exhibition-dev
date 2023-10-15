'use client'
import { useState } from "react"
import { allPosts } from 'contentlayer/generated'
import styles from "./page.module.css"
import Tab from "components/tab"
import WorkItem from "@/components/workItem"

export default function Project() {
  const subject_all = allPosts.map((item) => item.category);
  const subjectList = subject_all.filter((item, index) => { return subject_all.indexOf(item) === index }).sort();
  const [current, setCurrent] = useState(subjectList[0]);
  return (
    <div className={styles.root}>
      <Tab setCurrent={setCurrent} list={subjectList} current={current} />
      <div className={styles.listViewer}>
        <div className={styles.listwrap}>
          {
            allPosts.sort((a, b) => {
              if (a.title > b.title) return 1;
              if (a.title < b.title) return -1;
              return 0;
            }).map((item, index) =>
              item.category == current ? <WorkItem key={index} {...item} /> : null
            )
          }
        </div>
      </div>
    </div>
  )
}