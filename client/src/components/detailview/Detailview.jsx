import React, { useEffect, useState } from 'react'
import './detailview.css';
import{AiFillStar} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {getProductDetails } from '../../redux/action/productAction'
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/action/cartaction';

const Detailview = () => {
  const dispatch = useDispatch();
   const {id} = useParams();
  const [quantity, setquantity] = useState(1)
   const {loading, product} = useSelector( state =>state.getProductDetails)
   const navigate = useNavigate();
     
   

   useEffect(()=>{
    if(product&& id !== product.id)
 dispatch(getProductDetails(id))
  },[dispatch,  product, id, loading])

const additemtocart =()=>{
  const {id} = product
  navigate('/cart')
  dispatch(addToCart(id, quantity ))
}

  return (
    <div>
      
    {product && Object.keys(product).length &&
     
        <div className='productdetailview'>
          <div className="detailleft">
          <div className='imgbox' ><img  className='detailimage' src={product.url} alt="" /></div>
          <div className='btndiv'>
            <button className='btnbuy'>Buy now</button>
            <button onClick={additemtocart} className='btncart'>  Add to cart </button>
          </div>
          </div>
          <div className="detailright">
            <div className='detailtitle' >
            <p>{product.title.longTitle}</p>
         
            </div>
            <div style={{display: 'flex', alignItems:'center'}}>
              <h2>₹ {product.price.cost}</h2>
              <p style={{margin:'10px'}}><strike>{product.price.mrp}</strike></p>
              <p style={{color: "green"}}> {product.discount}</p>
            </div>
            <div style={{
              display:'flex',
              alignItems: 'center',
              
            }}>
              <span style={{backgroundColor:'green', 
                   display:'flex',
                   color:'#fff',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'50px',
                    borderRadius:'15px',
                    height:'30px'}}>
                 <p>5</p>
                 <AiFillStar/>
                 </span>
             <p> 1000 rating and 355 review</p>
            
            </div >
            <p style={{maxWidth:'30rem'}}> {product.description} </p>
            <Link  to='/'  className='crossicon'><RxCross1 className='cross' /></Link>
          </div>

        </div>
      }
    </div>
  )
}

export default Detailview
