import React from 'react'
import AddForm from '../components/AddForm'
import Cart from '../components/Cart'
import EditForm from '../components/EditForm'
import Header from '../components/Header'
import Items from '../components/Items'
import GlobalContext from '../Context'
import { useContext } from 'react'
const Home = () => {
    const {showAddForm,editForm, displayCart} = useContext(GlobalContext)
  return (
    <div>
        <Header />
        <Items />
        {editForm && <EditForm />}
        {showAddForm && <AddForm /> }
        {displayCart && <Cart /> }
    </div>
  )
}

export default Home