import React from 'react'
import './slide.css';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Slide = ({products, title, timer}) => {

     const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  return (
    <div className='slidecontainer'>
        
        <div className='slideheader'>
            <div className='headerleft'>
                <p>{title}</p>
             {timer&&
             <>
            <img src={timerURL} alt="" />
            <Countdown className='countdown' date={Date.now() + 4.68e+7}  />
             </>
             }
            </div >
            <button className='headerright'>view all</button>
            </div>
        <hr  className='hrline'/>
        
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            centerMode={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            showDots={false}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
              >
   {products.map(data=>(
      <Link to={`product/${data.id}`}  style={{textDecoration:'none'}} >
        <div className='imagecontainer'>
            <img className = " slide_image" src={data.url} alt="" />
              <p>{data.title.shortTitle}</p>
            <p style=
            {{color:'green'}}>{data.discount}</p>
            <p>{data.tagline}</p>
         </div>
      </Link> 
      ))}
      </Carousel>
    </div>
  )
}

export default Slide
