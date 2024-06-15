import React from 'react'
import { Tilt } from 'react-tilt'
import './Accessories.css'
import { items } from '../../Constant/Objects'

const Accessories = () => {

  return (
    <div className="accessories-container">
      {items.map((item, index) => (
        <div className="card1" style={{color:item.color}} key={index}>
          <div className="icon" style={{color:item.color}}>{item.icon}</div>
          <div className="title" >{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Accessories
