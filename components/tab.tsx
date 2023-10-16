"use client"

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
      <button className={styles.selected} onClick={toggle}>{current.toUpperCase()}  {open ? <FaCaretUp style={{color: "white"}} /> : <FaCaretDown style={{color: "white"}} />}</button>
      <div className={`${styles.list} ${open ? styles.open : null}`}>
        {
          list.map((item, index)=>
            <Item key={index} title={item} selected={current} setCurrent={setCurrent} dropup={dropup}/>
          )
        }
      </div>
    </div>
  )
}