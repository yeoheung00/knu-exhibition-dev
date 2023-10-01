'use client'

import Item from "./components/item";
import styles from "./index.module.css"
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import db from './db/data.json';

export default function Profile() {
  const data = db.graduate;
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState(0); // 0: all, 1: visual, 2: product
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
  return (
    <div className={styles.root}>
      <div className={styles.controler}>
        <h2 className={styles.title}>졸업자 명단</h2>
        <div className={styles.sortwrap}>
          <button className={`${styles.sort} ${sort == 0 ? styles.active : null}`} onClick={() => setSort(0)}>전체</button>
          <button className={`${styles.sort} ${sort == 1 ? styles.active : null}`} onClick={() => setSort(1)}>시각디자인</button>
          <button className={`${styles.sort} ${sort == 2 ? styles.active : null}`} onClick={() => setSort(2)}>제품디자인</button>
        </div>
        <div className={styles.searchwrap}>
          <img src='./icons/search.svg' alt='search' />
          <input value={searchValue} onChange={handlerSearchValue} type='text' />
        </div>
      </div>
      <div className={styles.empty}><span>'{searchValue}'</span>이(가) 포함된 이름이 없습니다.</div>
      <div className={styles.listwrap}>
        {
          list.map((item) => {
            return (data[item].name.includes(searchValue) ? <Item name={data[item].name} major={data[item].major} work={data[item].work} /> : null
            );
          })
        }
      </div>
    </div>
  )
}