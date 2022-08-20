import SetkaSVG from '../assets/setka.svg'
import React from 'react'
import './index.css'
import { Circle } from './Circle.jsx'
import { useCircleControls } from '../hooks/hooks'

export const Setka = ({  }) => {

  const [values, controllers] = useCircleControls()

  return <>
    <div className='hbContainer'>
      <button className='hbContainer__button' onClick={controllers.right}>Правее</button>
      <button className='hbContainer__button' onClick={controllers.left}>Левее</button>
      <button className='hbContainer__button' onClick={controllers.up}>Выше</button>
      <button className='hbContainer__button' onClick={controllers.down}>Ниже</button>
      <button className='hbContainer__button' onClick={controllers.smaller}>Меньше</button>
      <button className='hbContainer__button' onClick={controllers.bigger}>Больше</button>
    </div>
    <div className='setkaContainer'>
      <img className='disableEvents' src={SetkaSVG} alt="asd" />
      <Circle left={values.left} top={values.top} scale={values.scale} />
    </div>
  </>
}