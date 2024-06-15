import React from 'react' 
import './SalesRevenue.css'
import { salesRevenueData } from '../../Constant/Objects'

const SalesRevenue = () => {
  return (
    <div className='sales-revenue-container'>
      
      {
        salesRevenueData.map((item , index)=>{
           return <div className='card'  key={item.id} >
            <div className='logo-div'  style={{background : item.color}} >{item.icon}</div>
            <div className='num-pos-cont'>
              <div className='number' style={{color : item.color}} >{item.people}</div>
              <div className='position'>{item.title}</div>

            </div>
           </div>
        })
      }
       
      
    </div>
  )
}

export default SalesRevenue;
