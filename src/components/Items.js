import React from 'react'
import Item from './Item'
import { Swiper, SwiperSlide } from "swiper/react";
import AddForm from './AddForm';
import { useContext } from 'react'
import GlobalContext from '../Context'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";
const Items = () => {
  const {showAddForm,deleteItem,filtered} = useContext(GlobalContext)
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
          <img src='images/beautiful-handbag-10-removebg-preview.png' alt="" className='slider-img' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="slider-img-container">
            <img src='images/can.png' alt="" className='slider-img' />
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
          <img src='images/pams-removebg-preview.png' alt="" className='slider-img' />
          </div>
        </SwiperSlide >
        <SwiperSlide className='slide'>
          <div className="slider-img-container">
              <img src='images/shirt.png' alt="" className='slider-img' />
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
          <img src='images/watch-removebg-preview.png' alt="" className='slider-img' />
          </div>
        </SwiperSlide >
      </Swiper>
      </div>
      <section className='items-container'>
          {filtered.map(item =>(<Item key={item.id} item= {item} onDelete={()=>deleteItem(item.id)} />))  }    
      </section>
    </main>
  )
}

export default Items