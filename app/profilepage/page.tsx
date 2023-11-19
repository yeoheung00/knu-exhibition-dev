'use client'

import Item from "components/item";
import styles from "./index.module.css"
import { ChangeEvent, use, useEffect, useMemo, useState } from "react";
import Graduate from 'db/graduate.json';

export default function Profile() {
  const graduate = Graduate;
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState(0); // 0: all, 1: visual, 2: product
  const parts = ['전체', '시각디자인', '제품디자인'];
  const handlerSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }
  const list = useMemo(() => {
    switch (sort) {
      case 0:
        return Array.from({ length: 39 }, (v, i) => i);
      case 1:
        let visual: number[] = [];
        for (let i of graduate) if (i.major == '시각') visual.push(i.id);
        return visual;
      case 2:
        let product: number[] = [];
        for (let i of graduate) if (i.major == '제품') product.push(i.id);
        return product;
    }

    return [];
  }, [sort]);
  const [open, setOpen] = useState(false);
  function openSorts() {
    setOpen((current) => !current);
  }
  const [search, setSearch] = useState(false);
  function openSearch() {
    setSearch(current => !current);
  }
  return (
    <div className={styles.root}>
      <div className={styles.controler}>
        <h2 className={styles.title}>졸업자 명단</h2>
        <div className={`${styles.searchwrap} ${search ? styles.active : null}`}>
          <button className={`${styles.search} ${search ? styles.active : null}`} onClick={openSearch}>
            <div style={{
              maskImage: "url('/icons/searching.svg')",
              maskSize: "24px",
              WebkitMaskImage: "url('/icons/searching.svg')",
              WebkitMaskSize: "24px",
              backgroundColor: "white",
              width: "24px",
              height: "24px"
            }} />
          </button>
          <input className={`${search ? styles.active : null}`} value={searchValue} onChange={handlerSearchValue} type='text' />
          <button className={`${styles.closer} ${search ? styles.active : null}`} onClick={openSearch}>
            <div style={{
              maskImage: "url('/icons/closer.svg')",
              maskSize: "24px",
              WebkitMaskImage: "url('/icons/closer.svg')",
              WebkitMaskSize: "24px",
              backgroundColor: "white",
              width: "24px",
              height: "24px"
            }} />
          </button>
        </div>
      </div>
      <div className={styles.listbox}>
        <div className={styles.listwrap}>
          {
            list.map((item) => {
              return (graduate[item].name.includes(searchValue) ? <Item id={graduate[item].id} name={graduate[item].name} nameEng={graduate[item].name_eng} email={graduate[item].email} /> : null);
            })
          }
          <div className={styles.margin}></div>
          <div className={styles.margin}></div>
          <div className={styles.margin}></div>
          <div className={styles.margin}></div>
          <div className={styles.margin}></div>
        </div>
      </div>
    </div>
  )
}