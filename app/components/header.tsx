'use client'

import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header(){
  const pathname = usePathname().split("/")[1];
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen((current) => !current);
    console.log(isOpen);
  }
  const close = () => {
    setIsOpen(false);
  }
  return(
    <div className={styles.root}>
      <h1 className={styles.title}>{pathname}</h1>
      <nav className={`${styles.nav} ${isOpen?styles.active:null}`}>
        <ul>
          <li><Link onClick={close} href="/">Home</Link></li>
          <li><Link onClick={close} href="/about">About</Link></li>
          <li><Link onClick={close} href="/profile">Profile</Link></li>
          <li><Link onClick={close} href="/gallery">Gallery</Link></li>
        </ul>
      </nav>
      <div className={styles.opener} onClick={open}>
        <div className={isOpen ? `${styles.first} ${styles.firstX}` : styles.first}></div>
        <div className={isOpen ? `${styles.second} ${styles.secondX}` : styles.second}></div>
        <div className={isOpen ? `${styles.third} ${styles.thirdX}` : styles.third}></div>
      </div>
    </div>
  )
}