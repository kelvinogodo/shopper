import React from 'react'
// import Button from './Button'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {GrAdd} from 'react-icons/gr'
import {FaShopify} from 'react-icons/fa'
import SearchItems from './SearchItems'
const Header = ({onShow,onSearch,carts,showCart}) => {
  return (
   <header>
       <small className="logo">
         <FaShopify className='logo'/>
         shopper
       </small>
       <SearchItems onSearch={onSearch}/>
       <div className="header-btn-container">
         {carts.length !== 0 && <small className="item-number">
           {carts.length}
         </small>}
       <GrAdd text= 'add new item' onClick={onShow} className='add-btn'/>
       <BsFillCartCheckFill className='head-cart' onClick={showCart}/>
       </div>
   </header>
  )
}

export default Header