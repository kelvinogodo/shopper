import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import itemPic from './assets/mnssrn-mm-winter-high-top-outdoor-shoes-plus-velvet-to-keep-warm-non-slip-wear-resistant-and-comfortable-hiking-boots-female-hiking-shoes-removebg-preview.png'
// import "./styles.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {FaShopify} from 'react-icons/fa'

const Cart = ({carts,closeForm,total,onDelete}) => {

  return (
    <div className='cart'>
        <AiOutlineClose className="close" onClick={closeForm}/>
        <div className="cart-list">
        <div className='form-header'>
                 <small className='logo'>
                    shopper <FaShopify />
                 </small>
        </div>
        <small className='prize-badge'>total = {`$${total}`}</small>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper swiper-container"
      >
        {carts.map(cart =>(carts !== [] ? <SwiperSlide className='cart-slide'>
        <AiOutlineClose className="delete-item-btn"onClick={()=>onDelete(cart.id,cart.prize)} />
            <img src={itemPic} alt="" className='item-pic' key={cart.id} />
            <div className="cart-item-info">
                <p className='item-name'><span className='prize-head'>name: 
                </span>{cart.name}</p>
                <p className='item-prize'><span className='prize-head'>prize: 
                </span> {`$${cart.prize}`}</p>
            </div>
        </SwiperSlide > : <p className='p-float'>you have not added any item to cart</p>))}
      </Swiper>
      <button className='check-out-btn' type='submit'>check out</button>
        </div>  
    </div>
  )
}

export default Cart