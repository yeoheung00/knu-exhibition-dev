"use client"

import styles from "./tab.module.css"
import { useState } from "react"
import { FaCaretDown } from 'react-icons/fa6';
import { FaCaretUp } from 'react-icons/fa6';

export default function Tab() {
  const [subject, setSubject] = useState("Advertising");
  function change(input: string) {
    setSubject(input);
  }
  const [open, setOpen] = useState(false);
  function toggle() {
    setOpen((current) => !current);
  }
  return (
    <div className={styles.root}>
      <div className={styles.tab}>
        <button className={`${subject == "Advertising" ? styles.active : null}`} onClick={() => change("Advertising")}>Advertising</button>
        <button className={`${subject == "Editorial" ? styles.active : null}`} onClick={() => change("Editorial")}>Editorial</button>
        <button className={`${subject == "Multimedia" ? styles.active : null}`} onClick={() => change("Multimedia")}>Multimedia</button>
        <button className={`${subject == "Product" ? styles.active : null}`} onClick={() => change("Product")}>Product</button>
        <button className={`${subject == "Visual 1" ? styles.active : null}`} onClick={() => change("Visual 1")}>Visual 1</button>
        <button className={`${subject == "Visual 2" ? styles.active : null}`} onClick={() => change("Visual 2")}>Visual 2</button>
      </div>
      <div className={styles.drop}>
        <button className={styles.selected} onClick={toggle}>{subject}  {open?<FaCaretUp/>:<FaCaretDown/>}</button>
        <div className={`${styles.list} ${open ? styles.open : null}`}>
          <button className={`${subject == "Advertising" ? styles.active : null}`} onClick={() => {change("Advertising"); toggle()}}>Advertising</button>
          <button className={`${subject == "Editorial" ? styles.active : null}`} onClick={() => {change("Editorial"); toggle()}}>Editorial</button>
          <button className={`${subject == "Multimedia" ? styles.active : null}`} onClick={() => {change("Multimedia"); toggle()}}>Multimedia</button>
          <button className={`${subject == "Product" ? styles.active : null}`} onClick={() => {change("Product"); toggle()}}>Product</button>
          <button className={`${subject == "Visual 1" ? styles.active : null}`} onClick={() => {change("Visual 1"); toggle()}}>Visual 1</button>
          <button className={`${subject == "Visual 2" ? styles.active : null}`} onClick={() => {change("Visual 2"); toggle()}}>Visual 2</button>
        </div>
      </div>
    </div>
  )
}