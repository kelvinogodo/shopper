import React from 'react'
import Item from './Item'
import { Swiper, SwiperSlide } from "swiper/react";
import pic1 from './assets/beautiful-handbag-10-removebg-preview.png'
import pic4 from './assets/shirt.png'
import pic5 from './assets/watch-removebg-preview.png'
import pic2 from './assets/mnssrn-mm-winter-high-top-outdoor-shoes-plus-velvet-to-keep-warm-non-slip-wear-resistant-and-comfortable-hiking-boots-female-hiking-shoes-removebg-preview.png'
import pic3 from './assets/pams-removebg-preview.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";
const Items = ({items, checkId, toggleBtn, onDelete,onShow,like}) => {
  return (
    <main>
      <div className=''>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper swiper-container"
      >
        <SwiperSlide className='slide'>
          <div className="land-text">
            <h5>
              check out amazing shopper bags
            </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sunt obcaecati autem pariatur soluta doloribus recusandae veniam harum assumenda?</p>
            <button>explore</button>
          </div>
          <div className="slider-img-container">
          <img src={pic1} alt="" className='slider-img' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="slider-img-container">
            <img src={pic2} alt="" className='slider-img' />
          </div>
          <div className="land-text">
              <h5>
              get most comfortable shoes at shopper
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sunt obcaecati autem pariatur soluta doloribus recusandae veniam harum assumenda?</p>
              <button>explore</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="land-text">
            <h5>
              check out our amazing ladies footwear collection
            </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sunt obcaecati autem pariatur soluta doloribus recusandae veniam harum assumenda?</p>
            <button>explore</button>
          </div>
          <div className="slider-img-container">
          <img src={pic3} alt="" className='slider-img' />
          </div>
        </SwiperSlide >
        <SwiperSlide className='slide'>
          <div className="slider-img-container">
              <img src={pic4} alt="" className='slider-img' />
            </div>
            <div className="land-text">
                <h5>
                get most comfortable shoes at shopper
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sunt obcaecati autem pariatur soluta doloribus recusandae veniam harum assumenda?</p>
                <button>explore</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="land-text">
            <h5>
              check out our amazing ladies footwear collection
            </h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sunt obcaecati autem pariatur soluta doloribus recusandae veniam harum assumenda?</p>
            <button>explore</button>
          </div>
          <div className="slider-img-container">
          <img src={pic5} alt="" className='slider-img' />
          </div>
        </SwiperSlide >
      </Swiper>
      </div>
      <section className='items-container'>
          {items.map(item =>(<Item key={item.id} like={like} item= {item} checkId={checkId} toggleBtn={toggleBtn} onDelete={()=>onDelete(item.id)} onShow={onShow}/>))  }    
      </section>
    </main>
    
  )
}

export default Items