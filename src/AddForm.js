import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {FaShopify} from 'react-icons/fa'
const AddForm = ({closeForm, onAdd}) => {

    const [name,setName]=useState()
    const [prize,setPrize]=useState()
    const [id,setid]=useState()

    const onSubmit=(e)=>{
        e.preventDefault()
        onAdd({name,prize,id})
        setName('')
        setPrize ('')
        setid('')   
    }
  return (
    <div className="add-form-container">
        <AiOutlineClose className="close-btn" onClick={closeForm}/>
         <form className='add-form' onSubmit={onSubmit}>
             <div className='form-header'>
                 <small className='logo'>
                    shopper <FaShopify />
                 </small>
             </div>
        <fieldset className="form-controller">
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
        <input type="submit" value="submit" className='submit-btn'/>
        </form>
    </div>     
  )
}

export default AddForm