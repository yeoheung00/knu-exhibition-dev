"use client"

import Link from "next/link";
import styles from "./tab.module.css"
import { Dispatch, SetStateAction, useState } from "react"
import { FaCaretDown } from 'react-icons/fa6';
import { FaCaretUp } from 'react-icons/fa6';

type PropType = {
  setCurrent: Dispatch<SetStateAction<string>>;
  list: string[];
  current: string;
}

const Item = ({title, selected, setCurrent, dropup}: {title: string, selected: string, setCurrent:Dispatch<SetStateAction<string>>, dropup:()=>void}) => {
  return(
    <button className={`${selected==title?styles.active:null}`} onClick={()=>{dropup();setCurrent(title)}}>{title[0].toUpperCase() + title.slice(1)}</button>
  )
}

export default function Tab({setCurrent, list, current}: PropType) {
  const [open, setOpen] = useState(false);
  function dropup() {
    setOpen(false);
  }
  function toggle() {
    setOpen(prev => !prev);
  }
  return (
    <div className={styles.root}>
      <button className={styles.selected} onClick={toggle}>{current.toUpperCase()}  {open ? <FaCaretUp /> : <FaCaretDown />}</button>
      <div className={`${styles.list} ${open ? styles.open : null}`}>
        {
          list.map((item, index)=>
            <Item key={index} title={item} selected={current} setCurrent={setCurrent} dropup={dropup}/>
          )
        }
        {/* <Link className={`${subject == "advertising" ? styles.active : null}`} onClick={dropup} href="/projectpage/advertising">Advertising</Link>
        <Link className={`${subject == "editorial" ? styles.active : null}`} onClick={dropup} href="/projectpage/editorial">Editorial</Link>
        <Link className={`${subject == "multimedia" ? styles.active : null}`} onClick={dropup} href="/projectpage/multimedia">Multimedia</Link>
        <Link className={`${subject == "package" ? styles.active : null}`} onClick={dropup} href="/projectpage/package">Package</Link>
        <Link className={`${subject == "product" ? styles.active : null}`} onClick={dropup} href="/projectpage/product">Product</Link>
        <Link className={`${subject == "visual1" ? styles.active : null}`} onClick={dropup} href="/projectpage/visual1">Visual 1</Link>
        <Link className={`${subject == "visual2" ? styles.active : null}`} onClick={dropup} href="/projectpage/visual2">Visual 2</Link> */}
      </div>
    </div>
  )
}