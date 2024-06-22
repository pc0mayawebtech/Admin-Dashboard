import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Header.css'
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5"
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {getAuth} from 'firebase/auth'

const Header = () => {
    const[showMenu, setShowMenu] = useState(true);
    const[showSidebar, setShowSidebar] = useState(false);
    const[showProfileOption,setShowProfileOption] = useState(false)
    const navigate = useNavigate();
    const auth = getAuth(); 

    const navbarHandler = ()=>{
        setShowSidebar(!showSidebar)
    }
    
    const menuHandler = ()=>{
        if(window.innerWidth < 1023 )
            {
                setShowMenu(false)
                console.log(showMenu)
            }
            else{
                setShowMenu(true)
            }
    }
    window.addEventListener('resize',menuHandler)
    
    const menuStyle = !showMenu?{width:'100vw'}:{}

    const handleLogoClick = () =>{
      setShowProfileOption(!showProfileOption)
    }

    const handleLogOut = ()=>{
            signOut(auth)
            try {
              navigate('/')
            } catch (error) {
              
            }
    }

  return (
    <div className='navbar-main-container'>
      { showMenu && <Sidebar />}
      <div className={`sidebar ${showSidebar ? 'visible' : ''}`}  >
        <Sidebar />
      </div>
      <div className='header-container' style={menuStyle}>
        <div className='home-logo-div' style={!showMenu? {width:'30vw'}:{}} >
        {!showMenu && <div className='menu-option'  onClick={navbarHandler} > {showSidebar ? <IoClose /> : <IoMenuOutline />}</div>    }
          <div> <IoHome className='home-logo'/> </div>
          <div className='home-text-common home-text'>Home</div>
          <div className='home-text-common home-arrow'><MdKeyboardArrowRight /></div>
          <div className='home-text-common home-sales'>Sales</div>
        </div>
        <div className='header-container2'>
           <div className='flex '>
           <input className='input-box'  type='text' placeholder='Search anything' /> 
           <div className='search-div'><IoIosSearch className='search-button' /> </div>
        </div>
        <div>
          <div className='flex '>
            <div className='new-leads'  >You have <span className='text-green-500 font-bold'> 21 </span> new leads</div>
            <div className='search-div'><MdNotificationsActive className='search-button noti-logo text-yellow-400 font-bold' /> </div>
          </div>
        </div>
        <div className='abcd'>
        <div>
            <div className='flag'> <img className='flag-url' src="https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0" alt='img-logo' /> 
            </div>
        </div>
        <div className='name'>Umang</div>
        <div> <img className='user-photo' src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0" alt='img-logo' onClick={handleLogoClick} /></div>
        {
          showProfileOption && <div className='user-profile-container'>
          <div>Profile</div>
          <div>Settings</div>
          <div onClick={handleLogOut}>Logout</div>
        </div>
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
