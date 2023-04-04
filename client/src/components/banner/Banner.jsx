import React from 'react'
import { bannerData } from '../../constant/data'
import './banner.css';
import {GrNext , GrPrevious} from 'react-icons/gr'
const Banner = () => {


 
 {/* let translate = 0;

    setInterval(() => {
      let imag = document.querySelector(".banner")
     
      if(translate >= 0 && translate < 300){
        translate+=101;
      }
      else{
        translate = 0
      }
      
      imag.style.transform = `translateX(${-translate}%)`
    }, 2000); */}
  
    

  return (


    <div className="container">

<div className='nextbtn'>
      <GrNext />
      </div>
      <div className='previous'>
        <GrPrevious />
       </div>
    <div className='banner'>
     
    <div className='bannerimg'>
         {
           bannerData.map(data=>(
            <div className='img'  ><img className='bannerImage' id={data.id} src={data.url} alt="" /></div>
             ))
           }
    </div>
    
    </div>

   </div>
  )
}

export default Banner
