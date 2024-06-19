import React from 'react'
import './TransactionAndNotification.css'
import Transaction from '../Transaction/Transaction'
import Notification from '../Notification/notification'




const TransactionAndNotification = () => {
  return (
    <div className='TransactionAndNotification-container'>
      <Transaction />
      <Transaction />
      {/* <Notification /> */}
    </div>
  )
}

export default TransactionAndNotification
