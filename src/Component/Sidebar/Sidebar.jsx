import React from 'react'
import './Sidebar.css'
import AriseLogo from '../../Images/arise.png'
import { navBardata } from '../../Constant/Objects'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { useState } from 'react'

const Sidebar = () => {

  // const[showDropDown, setDropDown] = useState(false)
  const[activeIndex,setActiveIndex] = useState(null);
const sliderHandler = (index)=>{
    if(activeIndex === index)
      {
        setActiveIndex(null)
      }
      else{
        setActiveIndex(index)
      }
      
}


  return (
    <div className='sidebar-container'>
    <div className='ariseLogo-container'><div className='ariseLogo-div'><img src={AriseLogo} /></div></div>
      {
        navBardata.map( (value, index) =>{
          return <>
          <div className='sidebar-card-cont' key={value.id} onClick={()=>{sliderHandler(index)}} >
            <div className='sidebar-card-cont-logo'> { value.logo } </div>
            <div className='sidebar-card-cont-title'>{ value.title }</div>
            <div className='sidebar-card-cont-upDown'>{ value.button && activeIndex === index ? <FaAngleUp />:<FaAngleDown />}</div>
          </div>
          {
            activeIndex === index && value.subData.map((val, SubIndex) => {
              return <div className='sidebar-subData-card-cont' key={SubIndex} >
              <div className=''>{ val }</div>
            </div>
            })
          }
          </> 


        } )
      }
      
    </div>
   
  )
}

export default Sidebar
