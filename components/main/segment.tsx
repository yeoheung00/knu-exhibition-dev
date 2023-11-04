'use client'

import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

type SegmentType = {
  coordinate: { x: number, y: number },
  windowResolution: { width: number, height: number },
  resolution: { width: number, height: number },
  position: { top: number, left: number, direction: string },
  isMoved: boolean,
  animation: { x: number, y: number, direction: string },
  isRandom: boolean,
  randomData: { x: number, y: number, direction: string },
  big: { x: number, y: number, size: number }[]
}

export default function Segment({ coordinate, windowResolution, resolution, position, isMoved, animation, isRandom, randomData, big }: SegmentType) {
  let sizeResolution = resolution;
  let isTop = false;
  big.forEach((data) => {
    if (Number(data.x) == coordinate.x && Number(data.y) == coordinate.y) {
      isTop = true;
      sizeResolution = { width: resolution.width / Number(data.size), height: resolution.height / Number(data.size) }
    }
  });

  const [topValue, setTopValue] = useState(0);
  const [leftValue, setLeftValue] = useState(0);

  const {top, left} = useSpring({
    top: topValue + 'px',
    left: leftValue + 'px',
    config: {duration: 0}
  })

  function animate() {
    console.log('animated', animation.x, animation.y, animation.direction);
    const unit =  windowResolution.width / sizeResolution.width;
    let count = 0;
    const v = 50;
    switch(animation.direction){
      case 'left':
        setLeftValue(-unit);
        const left = setInterval(()=>{
          if(count >= 4){
            setLeftValue(0);
            clearInterval(left);
          } else setLeftValue(prev => prev - unit);
          count++;
        }, v)
        break;
      case 'right':
        setLeftValue(unit*-5);
        const right = setInterval(()=>{
          if(count >= 5){
            setLeftValue(0);
            clearInterval(right);
          } else setLeftValue(prev => prev + unit);
          count++;
        }, v)
        break;
      case 'up':
        setTopValue(-unit);
        const up = setInterval(()=>{
          if(count >= 4){
            setTopValue(0);
            clearInterval(up);
          } else setTopValue(prev => prev - unit);
          count++;
        }, v)
        break;
      case 'down':
        setTopValue(unit*-5);
        const down = setInterval(()=>{
          if(count >= 5){
            setTopValue(0);
            clearInterval(down);
          } else setTopValue(prev => prev + unit);
          count++;
        }, v)
        break;
    }
  }

  useEffect(()=>{
    console.log(leftValue);
  }, [leftValue])

  useEffect(() => {
    if (coordinate.x === animation.x && coordinate.y === animation.y && isMoved) {
      animate();
    }
  }, [isMoved]);

  function random() {
    console.log('random', randomData.x, randomData.y, randomData.direction);
  }

  useEffect(() => {
    if (coordinate.x === randomData.x && coordinate.y === randomData.y && isRandom) {
      random();
    }
  }, [isRandom]);

  return (
    <div style={{
      overflow: "hidden",
      width: windowResolution.width / sizeResolution.width + "px",
      height: windowResolution.height / sizeResolution.height + "px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: isTop ? 999 : 0,
      backgroundColor: "red",
      border: "1px solid white"
    }}>
      <animated.img src='/Asset1.png' alt='segment' style={
        {
          top,
          left,
          position: "absolute",
          width: windowResolution.width / sizeResolution.width * 6 + "px",
          height: windowResolution.width / sizeResolution.width * 6 + "px",
          transition: '0s'
        }
      } />
    </div>
  )
}