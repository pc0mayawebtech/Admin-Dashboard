import React from 'react'
import './Order.css'
import { orderData } from '../../Constant/Objects'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Order = () => {
  return (
    <div className='order-container'>
        <div className='orders'> Orders </div>
<table className="table-auto">
                <thead className='table-head-element'>
                    <tr >
                        <th>Customer</th>
                        <th>Product</th>
                        <th>UserId</th>
                        <th>Ordered Placed</th>
                        <th>Amount</th>
                        <th>Payment Status</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((item, index) => (
                        <tr className='one-row-data' key={index}>
                            <td className='customer'>
                             <span>{item.Customer}</span>
                            </td>
                            <td>{item.Product}</td>
                            <td>{item.UserID}</td>
                            <td>{item.OrderedPlaced}</td>
                            <td>${item.Amount.toFixed(2)}</td>
                            <td style={{color:item.colourKey}}><div className='flex gap-3'><span className='text-xl'>{item.icon}</span><span> {item.PaymentStatus}</span></div></td>
                            <td><div className='order-status' style={{backgroundColor:item.colourKey, color:'white'}}>{item.OrderStatus}</div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default Order
