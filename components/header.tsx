'use client'

import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { BsInstagram } from 'react-icons/bs';

export default function Header(){
  const pathname = usePathname().split("/")[1];
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const open = () => {
    setIsOpen((current) => !current);
    console.log(isOpen);
  }
  const close = () => {
    setIsOpen(false);
  }
  const dropdown = () => {
    setIsDrop((current) => !current);
  }
  const dropup = () => {
    setIsDrop(false);
  }
  return(
    <div className={styles.root}>
      <h1 className={styles.title}>PIECE OF CAKE</h1>

      <img className={styles.opener} src='/icons/Hamburger.svg' onClick={open}/>
      <nav className={`${styles.nav} ${isOpen?styles.active:null}`}>

        <img className={styles.closer} src='/icons/Close.svg' onClick={()=>{close(); dropup();}}/>

        <ul>
          <li className={`${pathname==""?styles.current:null}`}><Link onClick={close} href="/">Main</Link></li>
          <li className={`${pathname=="aboutpage"?styles.current:null}`}><Link onClick={close} href="/aboutpage">About</Link></li>
          <li className={`${pathname=="projectpage"?styles.current:null}`}><Link onClick={close} href="/projectpage">Project</Link></li>
          <li className={`${pathname=="indexpage"?styles.current:null}`}><Link onClick={close} href="/indexpage">Index</Link></li>
          <li className={styles.sns}><BsInstagram/></li>
        </ul>
      </nav>

    </div>
  )
}