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

  const [front, setFront] = useState(true);
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
        setTopValue(front?0:-unit);
        setLeftValue(front?-unit:-unit*5);
        const left = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(left);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
          count++;
        }, v)
        break;
      case 'right':
        setTopValue(front?-unit:0);
        setLeftValue(front?-unit:-unit*5);
        const right = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(right);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
          count++;
        }, v)
        break;
      case 'up':
        setTopValue(front?-unit*3:-unit*2);
        setLeftValue(front?-unit:-unit*5);
        const up = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(up);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
          count++;
        }, v)
        break;
      case 'down':
        setTopValue(front?-unit*2:-unit*3);
        setLeftValue(front?-unit:-unit*5);
        const down = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(down);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
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
    const unit =  windowResolution.width / sizeResolution.width;
    let count = 0;
    const v = 50;
    switch(randomData.direction){
      case 'left':
        setTopValue(front?0:-unit);
        setLeftValue(front?-unit:-unit*5);
        const left = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(left);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
          count++;
        }, v)
        break;
      case 'right':
        setTopValue(front?-unit:0);
        setLeftValue(front?-unit:-unit*5);
        const right = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(right);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
          count++;
        }, v)
        break;
      case 'up':
        setTopValue(front?-unit*3:-unit*2);
        setLeftValue(front?-unit:-unit*5);
        const up = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(up);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
          count++;
        }, v)
        break;
      case 'down':
        setTopValue(front?-unit*2:-unit*3);
        setLeftValue(front?-unit:-unit*5);
        const down = setInterval(()=>{
          if(count >= 4){
            if(front){
              setLeftValue(0);
              setTopValue(-unit);
              setFront(false);
            } else {
              setLeftValue(0);
              setTopValue(0);
              setFront(true);
            }
            clearInterval(down);
          } else {
            if(front){
              setLeftValue(prev => prev - unit);
            } else {
              setLeftValue(prev => prev + unit);
            }
          }
          count++;
        }, v)
        break;
    }
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
      backgroundColor: "white",
      border: "1px solid white"
    }}>
      <animated.img src='/asset.webp' alt='segment' style={
        {
          top,
          left,
          position: "absolute",
          width: windowResolution.width / sizeResolution.width * 6 + "px",
          height: windowResolution.width / sizeResolution.width * 4 + "px",
          transition: '0s'
        }
      } />
    </div>
  )
}