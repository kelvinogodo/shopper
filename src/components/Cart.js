import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {FaShopify} from 'react-icons/fa'
import { useContext } from 'react';
import GlobalContext from '../Context';
const Cart = () => {
  const {carts,total,closeDisplayCart,deleteCartItem} = useContext(GlobalContext)
  return (
    <div className='cart'>
        <AiOutlineClose className="close" onClick={closeDisplayCart}/>
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
        <AiOutlineClose className="delete-item-btn"onClick={()=>deleteCartItem(cart.id,cart.prize)} />
            <img src={`images/${cart.image}`} alt="" className='item-pic' key={cart.id} />
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