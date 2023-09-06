'use client'

import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { BsInstagram } from 'react-icons/bs';

export default function Header(){
  const pathname = usePathname();
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

      <div className={styles.opener} onClick={open}>
        <div className={styles.first}></div>
        <div className={styles.second}></div>
        <div className={styles.third}></div>
      </div>
      <nav className={`${styles.nav} ${isOpen?styles.active:null}`}>

        <div className={styles.closer} onClick={()=>{close(); dropup();}}>
          <div className={styles.firstX}></div>
          <div className={styles.secondX}></div>
        </div>

        <ul>
          <li className={`${pathname=="/"?styles.current:null}`}><Link onClick={()=>{close(); dropup();}} href="/">Main</Link></li>
          <li className={`${pathname=="/aboutpage"?styles.current:null}`}><Link onClick={()=>{close(); dropup();}} href="/aboutpage">About</Link></li>
          <li className={`${pathname=="/projectpage"?styles.current:null}`}><Link onClick={dropdown} href={pathname}>Project</Link></li>
          <div className={`${styles.dropdown} ${isDrop?styles.active:null}`}>
            <ul>
              <li onClick={()=>{close(); dropup();}}><Link href="/projectpage/advertising">Advertising Design</Link></li>
              <li onClick={()=>{close(); dropup();}}><Link href="/projectpage/visual">Visual Design</Link></li>
              <li onClick={()=>{close(); dropup();}}><Link href="/projectpage/editorial">Editorial Design</Link></li>
              <li onClick={()=>{close(); dropup();}}><Link href="/projectpage/package">Package Design</Link></li>
            </ul>
          </div>
          <li className={`${pathname=="/indexpage"?styles.current:null}`}><Link onClick={()=>{close(); dropup();}} href="/indexpage">Index</Link></li>
          <li className={styles.sns}><BsInstagram/></li>
        </ul>
      </nav>

    </div>
  )
}