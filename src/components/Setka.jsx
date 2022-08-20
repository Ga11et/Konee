import SetkaSVG from '../assets/setka.svg'
import React, { useState } from 'react'
import './index.css'
import { Circle } from './Circle.jsx'

export const Setka = ({  }) => {

  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [scale, setScale] = useState(20)

  const rightButtonHandler = () => {
    setLeft(prev => prev + scale < 20 ? prev + 1 : prev)
  }
  const leftButtonHandler = () => {
    setLeft(prev => prev !== 0 ? prev - 1 : prev)
  }
  const topButtonHandler = () => {
    setTop(prev => prev !== 0 ? prev - 1 : prev)
  }
  const bottomButtonHandler = () => {
    setTop(prev => prev + 1)
  }
  const biggerButtonHandler = () => {
    setScale(prev => prev !== 20 ? prev + 1 : prev)
  }
  const smallerButtonHandler = () => {
    setScale(prev => prev !== 1 ? prev - 1 : prev)
  }

  return <>
    <div style={{ zIndex: 5 }}>
      <button onClick={rightButtonHandler}>Правее</button>
      <button onClick={leftButtonHandler}>Левее</button>
      <button onClick={topButtonHandler}>Выше</button>
      <button onClick={bottomButtonHandler}>Ниже</button>
      <button onClick={smallerButtonHandler}>Меньше</button>
      <button onClick={biggerButtonHandler}>Больше</button>
    </div>
    <div className='setkaContainer'>
      <img className='disableEvents' src={SetkaSVG} alt="asd" />
      <Circle left={left} top={top} scale={scale} />
    </div>
  </>
}