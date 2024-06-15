import React from 'react'
import './ContentContainer.css'
import SalesRevenue from '../SalesRevenue/SalesRevenue'
import Accessories from '../Accessories/Accessories'
import Order from '../Orders/Order'
import TransactionAndNotification from '../TransactionAndNotification/TransactionAndNotification'


const ContentContainer = () => {
  return (
    <div className='content-container'>
      < SalesRevenue />
      < Accessories/>
      < Order />
      < TransactionAndNotification />
    </div>
  )
}

export default ContentContainer
