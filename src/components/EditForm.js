import React,{useState} from 'react'
import {FaShopify} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { useContext } from 'react'
import GlobalContext from '../Context'
const EditForm = ({onEdit,closeForm,setEditedData}) => {
    const {items} = useContext(GlobalContext)
    const [newName,setNewName]=useState()
    const [newPrize,setNewPrize]=useState()
    const [newId,setNewId]=useState()
    const editData = (e) =>{
        e.preventDefault()
        setNewId(items.filter(item =>(item.id === onEdit ? item.id : '')))
        const editedData={id:newId,name:newName,prize:newPrize}
        console.log(editedData)
        // setEditedData(editedData)
    }

  return (
    <div className="add-form-container">
        
    <AiOutlineClose className="close-btn" onClick={closeForm} />
    <form className='add-form' onSubmit={editData}>
        <div className='form-header'>
            <small className='logo'>
            shopper <FaShopify />
            </small>
        </div>
    <fieldset className="form-controller">
        <legend>item name</legend>
        <div className='input' contentEditable='true' value={newName}  onKeyDown={(e)=>{
            setNewName(e.target.innerText)
        }}>{items.map(item =>(item.id === onEdit ? item.name : ''))} </div>
    </fieldset>
    <fieldset className="form-controller">
        <legend>item prize</legend>
        <div className='input' contentEditable='true' value={newPrize} onKeyDown={(e)=>{
            setNewPrize(e.target.innerText)
        }} required={true}>{items.map(item =>(item.id === onEdit ? item.prize : ''))}</div>
    </fieldset>
    <input type="submit" value="submit" className='submit-btn'/>
    </form>
    </div>  
  )
}

export default EditForm