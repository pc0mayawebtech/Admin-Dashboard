import React from 'react'
import './ContentContainer.css'
import SalesRevenue from '../SalesRevenue/SalesRevenue'
import Accessories from '../Accessories/Accessories'

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <SalesRevenue />
      < Accessories/>
    </div>
  )
}

export default ContentContainer
