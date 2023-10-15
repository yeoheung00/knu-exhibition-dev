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
      <Link className={styles.title} href="/"><h1>PIECE OF CAKE</h1></Link>

      <img className={styles.opener} src='/icons/Hamburger.svg' onClick={open}/>
      <nav className={`${styles.nav} ${isOpen?styles.active:null}`}>

        <img className={styles.closer} src='/icons/Close.svg' onClick={()=>{close(); dropup();}}/>

        <ul>
          <li className={`${pathname=="aboutpage"?styles.current:null}`}><Link onClick={close} href="/aboutpage">ABOUT</Link></li>
          <li className={`${pathname=="projectpage"?styles.current:null}`}><Link onClick={close} href="/projectpage">PROJECT</Link></li>
          <li className={`${pathname=="indexpage"?styles.current:null}`}><Link onClick={close} href="/indexpage">INDEX</Link></li>
          <li className={styles.sns}><BsInstagram/></li>
        </ul>
      </nav>

    </div>
  )
}