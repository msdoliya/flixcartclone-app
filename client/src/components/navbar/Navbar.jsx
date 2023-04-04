import React from 'react';
import {navData} from '../../constant/data.js'
import './navbar.css'
const Navbar = () => {
  return (
    <div  className='navlist'>
      {navData.map(navdata=>(
        <div className='navitem'>
    <img src={navdata.url} alt="" />
       <p>{navdata.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Navbar
