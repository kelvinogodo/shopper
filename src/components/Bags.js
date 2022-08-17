import React from 'react'
import Bag from './Bag'
const Bags = ({items,checkId, toggleBtn, onDelete,onShow,like}) => {
  return (
    <section className='items-container'>
        {items.map(item =>(<Bag key={item.id} like={like} item= {item} checkId={checkId} toggleBtn={toggleBtn} onDelete={()=>onDelete(item.id)} onShow={onShow}/>))}
    </section>
  )
}

export default Bags