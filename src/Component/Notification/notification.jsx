import React from 'react'
import './Notification.css'
import { paymentDetails } from '../../Constant/Objects'

const notification = () => {
  return (
    <div className='notification-container'>
       <div className='tran-text'>Transaction</div>
       
       <div className='transaction-element1'>
       {
           paymentDetails.map(( item, index )=>{
               return <div className='transaction-element'>
               <div className='left-cont'>
                   <div className='icon1' style={{backgroundColor:item.color}} >{item.icon}</div>
                   <div className='card-order-cont'>
                       <div className='card2'>{item.title}</div>
                       <div className='order2'>{item.details.laptopOrdered}</div>
                   </div>
               </div>
               <div className='amount'>{item.details.amount}</div>
               </div>
           })
       }
        </div>
    </div>
  )
}

export default notification
