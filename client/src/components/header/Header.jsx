import React, { useState, useContext,useEffect } from 'react';
import './header.css'
import logo from '../assets/logo.png'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'
import Logindialog from '../loginpage/Logindialog';
import { Accountcontext } from '../context/Accountprovider';
import {BiLogOut} from 'react-icons/bi'
  import { Link } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/action/productAction'; 


const Header = () => {


    const [open, setopen] = useState(false);
    const {name, loged, setloged} = useContext(Accountcontext)
    const[text, settext] = useState('')
   const {products} = useSelector(state => state.getProducts) 
     const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getProducts())
  },[dispatch])

  
  const listitemhandleclick=()=>{
settext("")
  }

    const handlechange = (e) =>{
         settext(e.target.value)
        
    }


    const logindialg =() =>{
      setopen(true)
            }
  return (

    <>
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
            </Link>
        </div>
        <div className='input'>
          <input onChange={handlechange} type="text"  placeholder='search for product, brand and more' value={ text}/>
          <AiOutlineSearch className='search-icon'/>
          <div className='listcontainer'>
            {text&&
              <ul>
                {products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(data =>(
                  <li onClick={listitemhandleclick} className='listitem'> <Link className='link' to={`/product/${data.id}`} >{ data.title.longTitle} </Link></li>
                ))
                
                
                }
              </ul>
            
            }
          </div>
        </div>
        {loged?
   <div className='usernamediv'>
        <span className='username'>
          {`hi ${name}`}
            
          <span onClick={()=>{setloged(false)}} className='logout'><BiLogOut/>Logout</span>
         </span> 
     </div>
        :
        <div className="button">
          <button onClick={logindialg}>Login</button>
        </div>
}
        <div className="list">
          <ul className='list'>
            <li className="list-item">Became a seller</li>
            <li className="list-item">More</li>
         
            <Link style={{textDecoration:'none', color:'white'}} to={'/cart'}> <li className="list-item cart"><AiOutlineShoppingCart  className='cart-icon'/> cart</li> </Link>
          </ul>
        </div>

      </div>
    </div>
  { open && <Logindialog setopen ={setopen}
                          open = {open} />}
    </>
  )
}

export default Header
