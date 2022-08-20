import React from 'react'

export const Circle = ({ scale, left, top }) => {


  const circleStyle = {
    top: `calc(100% / 60 * ${top})`,
    left: `calc(100% / 20 * ${left})`,
    width: `calc(100% / 20 * ${scale})`,
    height: `calc(100% / 60 * ${scale})`
  }
  

  return <>
    <div className='circle' style={circleStyle}></div>
  </>
}