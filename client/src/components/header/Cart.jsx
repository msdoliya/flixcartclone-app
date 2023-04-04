import React, { useEffect, useState } from 'react'
import './cart.css'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/action/cartaction'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

const {cartItems} = useSelector(state => state.cart)
    const[price, setPrice] = useState(0)
    const[discount, setDiscount] = useState(0)
   const dispatch = useDispatch();

const totalAmount = () => {
  let price = 0, discount = 0;
  cartItems.map(item => {
      price += item.price.mrp
      discount += (item.price.mrp - item.price.cost) 
  })
  setPrice(price);
  setDiscount(discount);
}
  const removefromcart = (id)=>{
    dispatch(removeFromCart(id))
  }


useEffect(()=>{
  totalAmount();
},[cartItems,dispatch, ])
 return (
   <>
   {

    cartItems.length?
    <>
  <div className='cartcontainer' > 
  <div className="cartleft">
    <div className="headercart"></div>
    <hr style={{opacity: '.5'}} />
    
    
    {cartItems.map(item=>(

<>
     <div className="cartbody">
     <div className="cartimage"><img src={item.url} alt="" /> </div>
    <div className="cartdetail">
      <p style={{fontSize:'19px', fontWeight:'500'}}>{item.title.longTitle}</p>
      <p style={{opacity:'0.4', margin:'5px'}}> Size : XL</p>
      <p  style={{opacity:'0.4', margin:'0.5px'}}> seller : RetailNet</p>
      <span className='cartprice'>
       <p style={{fontSize: '14px', opacity: '0.5'}}><strike >{item.price.mrp}</strike></p>
         <h3 style={{fontSize: '21px', margin: '0 10px'}}>₹{item.price.cost}</h3>
          <p style={{color:'green', fontWeight:'700'}}>{item.price.discount} off</p> 
       </span>
       <div style={{display:'flex', marginTop:'30px'}}>
        <p style={{margin:'12px', fontSize:'20px'}} >SAVE FOR LATER</p>
        <p className='removebtn' onClick={()=>removefromcart(item.id)} style={{margin:'12px', fontSize:'20px',cursor:'pointer',}}>REMOVE</p>
       </div>
    </div> 
    </div>
      <hr style={{opacity: '.2'}} />
      </>
    ))} 
  </div>
  <div className="cartright">
    <p>PRICE DETAILS</p>
     <hr style={{border:'1px solid #f0f0f0'}} />
    <div className="totalprice">
      <p> Price ({cartItems.length} Items)</p>
      <p> ₹{price}</p>
    </div>
 <div className="discount"><p>Discount</p><p style={{color:'green'}}>-₹{discount}</p> </div>
 <div className="delivery"><p>Delivery Charges</p> <p>Free</p></div>
  <hr style={{border:'1px dashed #f0f0f0'}} />
 <div className='totalamount'><p>Total Amount</p> ₹{price-discount}</div>
 <hr style={{border:'1px dashed #f0f0f0'}} />
 <p style={{color:'green',fontWeight:'600'}}>You will save ₹{discount} on this order</p>
   </div>
  </div>
  <div className="placeorder"> <button className="orderbtn"> place order </button></div>
 </>
   
  :
    <div className='emptycart' >
      <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
      <p>Missing Cart Items ?</p>
       <Link to={'/'} className='continueshoping'>continue shopping</Link>
    </div>
   }
   
   
   </>
  )
}

export default Cart
