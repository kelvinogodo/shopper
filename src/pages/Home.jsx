import React from 'react'
import AddForm from '../components/AddForm'
import Cart from '../components/Cart'
import EditForm from '../components/EditForm'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Items from '../components/Items'
import GlobalContext from '../Context'
import { useContext } from 'react'
import MoreInfoModal from '../components/MoreInfoModal'
import Categories from '../components/Categories'
const Home = () => {
    const {showAddForm,editForm, displayCart,showInfoModal} = useContext(GlobalContext)
  return (
    <div>
        <Header />
        <Items />
        {/* <MoreInfoModal/> */}
        {showInfoModal && <MoreInfoModal/>}
        <Categories />
        {editForm && <EditForm />}
        {showAddForm && <AddForm /> }
        {displayCart && <Cart /> }
        <Contact />
        <Footer />
    </div>
  )
}

export default Home