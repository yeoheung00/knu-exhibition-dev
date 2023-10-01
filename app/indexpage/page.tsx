'use client'

import Item from "./components/item";
import styles from "./index.module.css"
import { ChangeEvent, use, useEffect, useMemo, useState } from "react";
import db from './db/data.json';

export default function Profile() {
  const data = db.graduate;
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
        for (let i of data) if (i.major == '시각') visual.push(i.id);
        return visual;
      case 2:
        let product: number[] = [];
        for (let i of data) if (i.major == '제품') product.push(i.id);
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
        <div className={styles.sortwrap}>
          <button className={`${styles.sort} ${sort == 0 ? styles.active : null}`} onClick={() => setSort(0)}>전체</button>
          <button className={`${styles.sort} ${sort == 1 ? styles.active : null}`} onClick={() => setSort(1)}>시각디자인</button>
          <button className={`${styles.sort} ${sort == 2 ? styles.active : null}`} onClick={() => setSort(2)}>제품디자인</button>
        </div>
        <div className={styles.dropwrap}>
          <button className={styles.now} onClick={openSorts}>{parts[sort]}</button>
          <div className={`${styles.list} ${open ? styles.open : null}`}>
            <button className={`${sort == 0 ? styles.active : null}`} onClick={() => { setSort(0); openSorts(); }}>전체</button>
            <button className={`${sort == 1 ? styles.active : null}`} onClick={() => { setSort(1); openSorts(); }}>시각디자인</button>
            <button className={`${sort == 2 ? styles.active : null}`} onClick={() => { setSort(2); openSorts(); }}>제품디자인</button>
          </div>
        </div>
        <div className={`${styles.searchwrap} ${search ? styles.active : null}`}>
          <img className={`${styles.search} ${search ? styles.active : null}`} onClick={openSearch} src='./icons/Search.svg' alt='search' />
          <input className={`${search ? styles.active : null}`} value={searchValue} onChange={handlerSearchValue} type='text' />
          <img className={`${styles.closer} ${search ? styles.active : null}`} onClick={openSearch} src='./icons/Close.svg' alt='close' />
        </div>
      </div>
      <div className={styles.empty}><span>'{searchValue}'</span>이(가) 포함된 이름이 없습니다.</div>
      <div className={styles.listwrap}>
        {
          list.map((item) => {
            return (data[item].name.includes(searchValue) ? <Item key={data[item].id} name={data[item].name} major={data[item].major} work={data[item].work} /> : null
            );
          })
        }
      </div>
    </div>
  )
}