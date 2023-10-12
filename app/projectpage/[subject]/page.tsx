'use client'
import { useEffect, useMemo, useState } from "react"
import styles from "./page.module.css"
import Tab from "components/tab"
import WorkItem from "@/components/workItem"
import works from "db/works.json"

export default function Project({ params }: { params: { subject: keyof typeof works } }) {
  const {subject} = params;
  const list = works[subject];
  return (
    <div className={styles.root}>
      <Tab subject={subject} />
      <div className={styles.listViewer}>
        <div className={styles.listwrap}>
          {
            list.map((item, index) =>
              <WorkItem key={index} subject={subject} index={item.index} title={item.title} designer={item.designer}/>
            )
          }
        </div>
      </div>
    </div>
  )
}