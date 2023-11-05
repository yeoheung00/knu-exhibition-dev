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

      <div className={styles.opener} onClick={open} style={{
          padding: '12px',
          width: '48px',
          height: '48px',
          cursor: 'pointer'
      }}>
      <div style={{
          maskImage: 'url(/icons/hamburger.svg)',
          maskSize: '24px',
          WebkitMaskImage: 'url(/icons/hamburger.svg)',
          WebkitMaskSize: '24px',
          backgroundColor: 'var(--main)',
          width: '24px',
          height: '24px'

      }}/>
      </div>
      <nav className={`${styles.nav} ${isOpen?styles.active:null}`}>

        <div className={styles.closer} onClick={()=>{close(); dropup();}} style={{
          padding: '12px',
          width: '48px',
          height: '48px'
        }}>
          <div style={{
          maskImage: 'url(/icons/closer.svg)',
          maskSize: '24px',
          WebkitMaskImage: 'url(/icons/closer.svg)',
          WebkitMaskSize: '24px',
          backgroundColor: '#ffffff',
          width: '24px',
          height: '24px'
        }}/>
        </div>

        <ul>
          <li className={`${pathname=="aboutpage"?styles.current:null}`}><Link onClick={close} href="/aboutpage">ABOUT</Link></li>
          <li className={`${pathname=="projectpage"?styles.current:null}`}><Link onClick={close} href="/projectpage">PROJECT</Link></li>
          <li className={`${pathname=="indexpage"?styles.current:null}`}><Link onClick={close} href="/indexpage">INDEX</Link></li>
          <li><Link className={styles.sns} href='https://www.instagram.com/knu_piece_of_cake/' target="_blank"><div style={{
            maskImage: 'url(/icons/instagram_Glyph_Black.svg)',
            maskSize: '24px',
            WebkitMaskImage: 'url(/icons/instagram_Glyph_Black.svg)',
            WebkitMaskSize: '24px',
            width: '24px',
            height: '24px'
          }}/></Link></li>
        </ul>
      </nav>

    </div>
  )
}