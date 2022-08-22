import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { useState, useContext } from 'react'
import GlobalContext from '../Context'
import Item from './Item'
import StickyHeader from './StickyHeader'
const Categories = () => {
    const {filtered,setFilered,deleteItem} = useContext(GlobalContext)
  return (
    <section className='category-section'>
      <StickyHeader categories={[
        {
          id:1,
          title:'all'
        },
        {
          id:2,
          title:'men'
        },
        {
          id:3,
          title:'shoe'
        },
        {
          id:4,
          title:'women'
        },
        {
          id:5,
          title:'handbag'
        }
        ] } text={'sort by category'}/>
      <motion.div layout animate={{opacity:1}} initial={{opcaity:0}} exit={{opacity:0}}  className='items-container category-container'>
        <AnimatePresence >
          {filtered.map(item =>(<Item key={item.id} item= {item} onDelete={()=>deleteItem(item.id)} />))  }
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Categories
{/* <fieldset className="form-controller">
            <legend>item name</legend>
            <input type="text"  value= {name} onChange={(e)=>setName(e.target.value)} required/>
        </fieldset>
        <fieldset className="form-controller">
            <legend>item prize</legend>
            <input type="text"  value  = {prize}  onChange={(e)=>{const prizeNum = parseInt(e.target.value); setPrize(prizeNum)}} required/>
        </fieldset>
        <fieldset className="form-controller">
            <legend>item id</legend>
            <input type="text"  value={id}  onChange={(e)=>setid(e.target.value)} required />
        </fieldset>
        <input type="submit" value="submit" className='submit-btn'/> */}