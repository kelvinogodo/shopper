import './App.css'
import Header from './Header';
import Items from './Items';
import Cart from './Cart';
import pic1 from './assets/black shoe1 (11).jpeg'
import AddForm from './AddForm';
import EditForm from './EditForm';
import {useState} from 'react'
import image1 from './assets/shirt.png'
import Bags from './Bags';
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  const [items,setItems] = useState(
    [
      {
        id: 1,
        image: {image1},
        name:'brazilian runner shoe',
        prize: 870,
        liked:false,
        description:{
          size:'30',
          color:'blue',
          madeIn:'Australia',
        }
      },
      {
        id:2,
        image: {image1},
        name:'italian official shoe',
        prize: 550,
        liked:false,
        description:{
          size:'45',
          color:'red',
          madeIn:'nigeria',
        }
      },
      {
        id:3,
        image: {image1},
        name:'uk rampage shoe',
        prize: 150,
        liked:false,
        description:{
          size:'34',
          color:'pink',
          madeIn:'london',
        }
      },
      {
        id:4,
        image: {image1},
        name:'jamaican regge shoe',
        prize: 200,
        liked:false,
        description:{
          size:'63',
          color:'black',
          madeIn:'tanzania',
        }
      }
    ]
  )

  // cart items state 
  const [carts, setCart]= useState([])

  // const [toggleBtn, setToggleBtn] =useState(false)

  // display cart state codes 
  const [displayCart, setDisplayCart]= useState(false)

  const [itemPrizes,setItemPrizes]=useState([0])

  // function for getting item added to cart 

  const checkId = (cartData)=>{
    // setItems(items.map(item =>(item.id === cartData.id ? {...item, added: !item.added} : item)))
    //debugger;
    carts.push(cartData);
    
    //setCart([...carts,cartData])
    // carts.map(cart=>(setTotal(cart.prize.reduce((total,num) => (   total  + num  )))))

    console.log(carts)
    
    // // function for getting total prizes array 

      carts.map(cart => (setItemPrizes([...itemPrizes,cart.prize])))
      console.log(itemPrizes)
      console.log(itemPrizes.reduce((total,num) => ( total  + num )))
      console.log(total())
  }
    // const [total,setTotal]=useState(0)
    const total = itemPrizes.reduce((total,num) => ( total  + num ))
    // return totalPrize;
    // }
    // function for toggling cart items 

    const toggleCartDisplay = ()=>{
      setDisplayCart(true)
      console.log(carts)
    } 
    const closeDisplayCart =()=>{
      setDisplayCart(false)
    }
    // delete item function 

    const deleteItem =(id)=>{
      setItems(items.filter(item =>(item.id !== id)))
    }

    // function to delete an item from cart 

    const deleteCartItem = (id,amount)=>{
      setCart(carts.filter(cart =>(cart.id !== id)))
      setItemPrizes(itemPrizes.filter(itemPrize =>(itemPrize !== amount)))
    }

    // add item function 

    const addItem = (item)=>{
      const newItem = {...item,added:false}
      setItems([...items,newItem])
    }

    // show form state
    const [showAddForm, setShowAddForm] = useState('')

    // show form function 
    const showForm =()=>{
      setShowAddForm(true)
    }
    // close form function 
    const closeForm =()=>{
      setShowAddForm(false)
    }
    //  edit form state 
    const [editForm,setEditForm]=useState(false)

    // show edit form function 
    const showEditForm=(id)=>{
      setEditForm(true)
      editItem(id)
    }
    // close editForm function 
    const closeEditForm =()=>{
      setEditForm(false)
    }
    // edit item function 
    const [editId,setEditId]=useState('')

    const editItem = (id) =>{
      setEditId(id)
    }


    const onSearch = (letter)=>{
      setItems(items.filter(item => (item.name.trim().includes(letter) && item )))
  }

  // funtion for liking an item 

  const like = (id)=> {
    setItems(items.map(item => (item.id === id ? { ...item, liked: !item.liked } : item)));
  }

  return (
    <div className="app">
      {showAddForm ? <AddForm closeForm={closeForm} onAdd={addItem}/> : <></>}
      {editForm ? <EditForm items={items} onEdit={editId} closeForm={closeEditForm}/> : ''}
      <Header onShow={showForm} onSearch={onSearch} carts={carts} showCart={toggleCartDisplay}/>
      <Items items={items} checkId= {checkId} onDelete={deleteItem} onShow={showEditForm} 
      onSearch={onSearch} like={like}/> 
      <Bags items={items} checkId= {checkId} onDelete={deleteItem} onShow={showEditForm} 
      onSearch={onSearch} like={like}/>
      {displayCart ? <Cart carts={carts} closeForm={closeDisplayCart} itemPrizes={itemPrizes}  onDelete={deleteCartItem} total={total}/> : <></>}
    </div>
  );
}

export default App;
