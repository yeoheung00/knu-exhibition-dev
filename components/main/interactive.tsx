'use client'
import styles from './interactive.module.css'
import Segment from 'components/main/segment'
import { MouseEvent, TouchEvent, useEffect, useState } from 'react'

export default function Home() {
  const backgroundResolution = { width: 1360, height: 1920 };
  const [resolution, setResolution] = useState({ width: 12, height: 21 });
  const [windowResolution, setWindowResolution] = useState({ width: 0, height: 0 });
  const [segments, setSegments] = useState<{ top: number, left: number, direction: string }[][]>([]);
  const [big, setBig] = useState<{ x: number, y: number, size: number }[]>([]);
  let side: boolean[][] = [];

  useEffect(() => {
    setWindowResolution({ width: window.innerWidth, height: window.innerHeight - 60 });
    window.addEventListener("resize", () => {
      setWindowResolution({ width: window.innerWidth, height: window.innerHeight - 60 });
    });
    random();
  }, []);

  useEffect(() => {
    let tempResolution = { width: 17, height: 17 };
    if (windowResolution.width > windowResolution.height) {
      tempResolution.width = Math.round(17 * windowResolution.width / windowResolution.height);
      tempResolution.height = 17;
      while (tempResolution.height > 0) {
        if (tempResolution.width * tempResolution.height < 120) break;
        tempResolution.height--;
        tempResolution.width = Math.round(tempResolution.height * windowResolution.width / windowResolution.height);
      }
    } else {
      tempResolution.width = 17;
      tempResolution.height = Math.round(17 * windowResolution.height / windowResolution.width);
      while (tempResolution.width > 0) {
        if (tempResolution.width * tempResolution.height < 120) break;
        tempResolution.width--;
        tempResolution.height = Math.round(tempResolution.width * windowResolution.height / windowResolution.width);
      }
    }
    setResolution(tempResolution);
  }, [windowResolution]);

  useEffect(() => {
    if (resolution.width > 4 && resolution.height > 4) {
      let tempCoordinate: { x: number, y: number, size: number }[] = [];

      let count = 0;
      for (let i = 0; i < 5; i++) {
        if (count > 2000) break;
        count++;
        const size = Math.floor(Math.random() * 2) + 2;
        const x = Math.round(Math.random() * (resolution.width - size));
        const y = Math.round(Math.random() * (resolution.height - size));

        tempCoordinate.push({ x: x, y: y, size: size });

        for (let j = 0; j < tempCoordinate.length - 1; j++) {
          const data = tempCoordinate[j];
          if (isMeet({ x: x, y: y, size: size }, { x: data.x, y: data.y, size: data.size }) || isMeet({ x: data.x, y: data.y, size: data.size }, { x: x, y: y, size: size })) {
            tempCoordinate.pop();
            i--;
            break;
          }
        };
      }
      setBig(tempCoordinate);
    }

  }, [resolution]);

  function isMeet(box1: { x: number, y: number, size: number }, box2: { x: number, y: number, size: number }) {
    const rec_x1 = box1.x
    const rec_y1 = box1.y
    const rec_x2 = box1.x + box1.size
    const rec_y2 = box1.y + box1.size

    const rec2_x1 = box2.x
    const rec2_y1 = box2.y
    const rec2_x2 = box2.x + box2.size
    const rec2_y2 = box2.y + box2.size

    const maxrec_x = Math.max(rec_x1, rec_x2)
    const minrec_x = Math.min(rec_x1, rec_x2)
    const maxrec_y = Math.max(rec_y1, rec_y2)
    const minrec_y = Math.min(rec_y1, rec_y2)

    if (!(minrec_x < rec2_x1 && rec2_x1 < maxrec_x) &&
      !(minrec_x < rec2_x2 && rec2_x2 < maxrec_x) &&
      !(minrec_y < rec2_y1 && rec2_y1 < maxrec_y) &&
      !(minrec_y < rec2_y2 && rec2_y2 < maxrec_y))
      return false;
    else
      return true;
  }

  useEffect(() => {
    const direction = windowResolution.width / windowResolution.height > backgroundResolution.width / backgroundResolution.height ? "width" : "height";

    let segments_temp: { top: number, left: number, direction: string }[][] = [];
    for (let y = 0; y < resolution.height; y++) {
      let row_temp: { top: number, left: number, direction: string }[] = [];
      let row_side: boolean[] = [];
      for (let x = 0; x < resolution.width; x++) {
        let randomSide = Math.floor(Math.random() * 10);
        row_side.push(randomSide != 7);
        let top = 0;
        let left = 0;
        if (direction === "height") {
          top = (windowResolution.height / resolution.height) * y * -1;
          left = (backgroundResolution.width / backgroundResolution.height * windowResolution.height - windowResolution.width) / -2 - windowResolution.width / resolution.width * x;
        }
        else if (direction === "width") {
          top = (backgroundResolution.height / backgroundResolution.width * windowResolution.width - windowResolution.height) / -2 - windowResolution.height / resolution.height * y;
          left = (windowResolution.width / resolution.width) * x * -1;
        }
        row_temp.push({ top: top, left: left, direction: direction });
      }
      side.push(row_side);
      segments_temp.push(row_temp);
    }
    setSegments(segments_temp);
  }, [resolution])

  const [animation, setAnimation] = useState({ x: 0, y: 0, direction: '' });
  const [isClicked, setIsClicked] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [prev, setPrev] = useState({ x: -1, y: -1, direction: 'none' });

  const handlerMouseDown = (event: MouseEvent) => {
    const clickedX = Math.floor(event.clientX / (windowResolution.width / resolution.width));
    const clickedY = Math.floor((event.clientY - 60) / (windowResolution.height / resolution.height));
    const direction = Math.floor(Math.random() * 4);
    const directionData = ['up', 'down', 'right', 'left']
    setPrev({ x: clickedX, y: clickedY, direction: directionData[direction] });
    setIsClicked(true);
  }


  const handlerMouseMove = (event: MouseEvent) => {
    if (isClicked) {
      const movedX = Math.floor(event.clientX / (windowResolution.width / resolution.width));
      const movedY = Math.floor((event.clientY - 60) / (windowResolution.height / resolution.height));
      if (movedX != prev.x || movedY != prev.y) {
        let direction = '';
        if (movedX > prev.x) direction = 'right';
        if (movedX < prev.x) direction = 'left';
        if (movedY > prev.y) direction = 'down';
        if (movedY < prev.y) direction = 'up';
        setAnimation({ x: prev.x, y: prev.y, direction: direction });
        setPrev({ x: movedX, y: movedY, direction: direction });
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    }
  }



  const handlerMouseUp = (event: MouseEvent) => {
    if (!isMoved) {
      const clickedX = Math.floor(event.clientX / (windowResolution.width / resolution.width));
      const clickedY = Math.floor((event.clientY - 60) / (windowResolution.height / resolution.height));
      setAnimation({ x: clickedX, y: clickedY, direction: prev.direction });
      setIsMoved(true);
      setTimeout(() => setIsMoved(false), 100);
    }
    setIsClicked(false);
  }




  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const touchStart = (event: TouchEvent) => {
    // const clickedX = event.changedTouches[0].clientX / (windowResolution.width / resolution.width);
    // const clickedY = event.changedTouches[0].clientY / (windowResolution.height / resolution.height);
    // setCoordinate({ x: clickedX, y: clickedY });




    const clickedX = Math.floor(event.changedTouches[0].clientX / (windowResolution.width / resolution.width));
    const clickedY = Math.floor((event.changedTouches[0].clientY - 60) / (windowResolution.height / resolution.height));
    const direction = Math.floor(Math.random() * 4);
    const directionData = ['up', 'down', 'right', 'left']
    setPrev({ x: clickedX, y: clickedY, direction: directionData[direction] });
    setIsClicked(true);
  }

  const touchMove = (event: TouchEvent) => {
    // const clickedX = event.changedTouches[0].clientX / (windowResolution.width / resolution.width);
    // const clickedY = event.changedTouches[0].clientY / (windowResolution.height / resolution.height);
    // setCoordinate({ x: clickedX, y: clickedY });




    if (isClicked) {
      const movedX = Math.floor(event.changedTouches[0].clientX / (windowResolution.width / resolution.width));
      const movedY = Math.floor((event.changedTouches[0].clientY - 60) / (windowResolution.height / resolution.height));
      if (movedX != prev.x || movedY != prev.y) {
        let direction = '';
        if (movedX > prev.x) direction = 'right';
        if (movedX < prev.x) direction = 'left';
        if (movedY > prev.y) direction = 'down';
        if (movedY < prev.y) direction = 'up';
        setAnimation({ x: prev.x, y: prev.y, direction: direction });
        setPrev({ x: movedX, y: movedY, direction: direction });
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    }
  }

  const touchEnd = (event: TouchEvent) => {
    // const clickedX = event.changedTouches[0].clientX / (windowResolution.width / resolution.width);
    // const clickedY = event.changedTouches[0].clientY / (windowResolution.height / resolution.height);
    // setCoordinate({ x: clickedX, y: clickedY });




    if (!isMoved) {
      const clickedX = Math.floor(event.changedTouches[0].clientX / (windowResolution.width / resolution.width));
      const clickedY = Math.floor((event.changedTouches[0].clientY - 60) / (windowResolution.height / resolution.height));
      setAnimation({ x: clickedX, y: clickedY, direction: prev.direction });
      setIsMoved(true);
      setTimeout(() => setIsMoved(false), 100);
    }
    setIsClicked(false);
  }





  const [isRandom, setIsRandom] = useState(false);
  const [randomData, setRandomData] = useState({ x: 0, y: 0, direction: '' });

  function random() {
    const timer = Math.floor(Math.random() * 1000) + 100;
    const rx = Math.floor(Math.random() * resolution.width);
    const ry = Math.floor(Math.random() * resolution.height);
    const direction = Math.floor(Math.random() * 4);
    const directionData = ['up', 'down', 'right', 'left']
    setRandomData({ x: rx, y: ry, direction: directionData[direction] });
    setIsRandom(true);
    setTimeout(() => { setIsRandom(false); }, 100);
    setTimeout(() => { random(); }, timer);
  }


  return (
    <main className={styles.main}>
      {
        segments.map((row, row_idx) => <div key={row_idx} className={styles.row}>
          {row.map((col, col_idx) => (<div key={col_idx} className={styles.col} style={{
            overflow: "visible",
            width: windowResolution.width / resolution.width + "px",
            height: windowResolution.height / resolution.height + "px"
          }}>
            <Segment coordinate={{ x: col_idx, y: row_idx }} windowResolution={windowResolution} resolution={resolution} position={col} isMoved={isMoved} animation={animation} isRandom={isRandom} randomData={randomData} big={big} />
          </div>)
          )}
        </div>)
      }
      <div className={styles.feedback} onMouseDown={handlerMouseDown} onMouseUp={handlerMouseUp} onMouseMove={handlerMouseMove} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} />
    </main>
  )
}