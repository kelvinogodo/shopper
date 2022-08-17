import React from 'react'
// import Button from './Button'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {GrAdd} from 'react-icons/gr'
import {FaShopify} from 'react-icons/fa'
import SearchItems from './SearchItems'
import { useContext } from 'react'
import GlobalContext from '../Context'
const Header = () => {
  const {carts,showForm,toggleCartDisplay,onSearch,showAddForm} = useContext(GlobalContext)
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
       <GrAdd text= 'add new item' onClick={showForm} className='add-btn'/>
       <BsFillCartCheckFill className='head-cart' onClick={toggleCartDisplay}/>
       </div>
   </header>
  )
}

export default Header