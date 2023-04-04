import React, { useEffect } from 'react'
import Banner from './banner/Banner'
import Navbar from './navbar/Navbar'
import {getProducts} from '../redux/action/productAction'
 import {useDispatch, useSelector} from 'react-redux'
import Slide from './slide/Slide'

const Home = () => {

   const {products} = useSelector(state => state.getProducts)
    
  console.log(products);
  
   const dispatch = useDispatch()




  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])




  return (
    <>
      <Navbar/>
      <Banner/>
      <Slide products={products} timer={true} title ='deals of the day'/>
      <Slide products={products} timer ={false} title ='elctronics Item'/>
      <Slide products={products} timer ={false} title ='top picks'/>
      <Slide products={products} timer ={false} title='Todays fashion deals'/>
      <Slide products={products} timer ={false} title ='home and  kitchen'/>
      <Slide products={products} timer ={false}title ='men n women'/>

    </>
  )
}

export default Home
