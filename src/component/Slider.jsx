import React from 'react'
import './Slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='slider-carosel'>
  <h1 className='text-yellow-400 text-center text-4xl'>Do you Know About HongKong</h1>
     <Carousel responsive={responsive}>
  <div className='bard'>
  <img src="https://www.facts-about-hong-kong.com/images/04-01-history-of-hong-kong.jpg" alt='product-img'></img>
  <h1 className='text-white text-center text-3xl mt-5'>History of HongKong</h1>
  </div>

  <div className='bard'>
  <img src='https://media.philstar.com/photos/2023/01/17/hongkong-secretary-sun-a_2023-01-17_15-38-59.jpg' alt='product-img'></img>
  <h1 className='text-red-500 text-center text-3xl mt-5'>Governoment</h1>
  </div>
  <div className='bard'>
  <img src='https://static01.nyt.com/images/2021/01/16/world/16hongkong-politics-1/16hongkong-politics-1-videoSixteenByNineJumbo1600.jpg' alt='product-img'></img>
  <h1 className='text-amber-300 text-center text-3xl mt-5'>politics</h1>
  </div>
  <div className='bard'>
  <img src='https://fingfx.thomsonreuters.com/gfx/mkt/12/5320/5272/Hong%20Kong%20share%20of%20Chinese%20USD%20bonds%20Refinitiv.jpg' alt='product-img'></img>
  <h1 className='text-orange-400 text-center text-3xl mt-5'>Economy</h1>
  </div>
  <div className='bard'>
  <img src='https://cdn.i-scmp.com/sites/default/files/2014/06/17/diwali.jpg' alt='product-img'></img>
  <h1 className='text-rose-500 text-center text-3xl mt-5'>Culture</h1>
  </div>
  <div className='bard'>
  <img src="https://cms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com/images/3/0/4/8/45308403-3-eng-GB/Cropped-16820175302022-06-24T014353Z_2106847559_RC2CRU90G6ZY_RTRMADP_3_HONGKONG-ANNIVERSARY.JPG" alt="product-img" />
  <h1 className='text-yellow-400 text-center text-3xl mt-5'>Education</h1>
  </div>
  <div className='bard'>
  <img src="https://gdb.voanews.com/06a20000-0aff-0242-5f12-08db07ca22ce_w1080_h608_s.jpg" alt="poduct-img" />
  <h1 className='text-rose-500 text-center text-3xl mt-5'>Media</h1>
  </div>
  <div className='bard'>
  <img src="https://images.chinahighlights.com/allpicture/2018/06/803da5327e9c421c81f38bc0_cut_800x500_61.webp" alt="product-img" />
  <h1 className='text-yellow-400 text-center text-3xl mt-5'>Food</h1>
  </div>
</Carousel>;
    </div>
  )
}

export default Slider
