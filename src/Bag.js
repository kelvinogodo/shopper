import React from 'react'
import Shoe2 from './assets/beautiful-handbag-10-removebg-preview.png'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdOutlineModeEdit} from 'react-icons/md'
import {AiTwotoneHeart} from 'react-icons/ai'
import {BsCart4} from 'react-icons/bs'
import {MdOutlineAdd} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
const Bag = ({item, checkId, onDelete, onShow,like}) => {
  return (
    <div className='item'>
        <AiTwotoneHeart className={item.liked ? 'liked' : 'unliked'} onClick={()=>like(item.id)}/>
        <div className='item-btn-container'>
          <AiOutlineDelete  className="delete-btn" onClick={onDelete} />
          <MdOutlineModeEdit deEdit className='edit-btn' onClick={()=>onShow(item.id)} /> 
        </div>
        <img src={`${Shoe2}`} alt="" />
        <div className="item-info">
            <p>{item.name}</p>
            <small className='prize'> {`prize: $ ${item.prize}`}</small>
        </div>
        <MdOutlineAdd className='add-item-btn' onClick={()=> checkId({id:item.id,name:item.name,prize:item.prize,image:item.image})
        } /> 
    </div>
  )
}

export default Bag