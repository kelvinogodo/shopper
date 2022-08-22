import { createContext, useState } from "react";

const GlobalContext = createContext();


export function GlobalDataProvider({children}){
    const [items,setItems] = useState(
        [
          {
            id: 1,
            image: 'watch-removebg-preview.png',
            name:'45 caret-gold rolex watch',
            prize: 870,
            category:'men',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:2,
            image: 'oficial-suit (3).jpg',
            name:'italian suit',
            prize: 550,
            category:'men',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:3,
            image: 'shirt.png',
            name:'vintage t-shirt',
            category:'men',
            finalPrize:1,
            prize: 150,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:4,
            image: 'casual-shoes (2).jpg',
            name:'sneakers',
            prize: 200,
            category:'shoe',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:5,
            image: 'oficial-suit (3).jpg',
            name:'blue sneakers',
            prize: 3200,
            category:'men',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:6,
            image: 'handbag (1).jpg',
            name:'co-operate shoe',
            prize: 269,
            category:'handbag',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:7,
            image: 'coperate-suit.jpg',
            name:'jamaican regge shoe',
            prize: 436,
            category:'men',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:8,
            image: 'sneaker3.png',
            name:'jamaican regge shoe',
            prize: 609,
            category:'shoe',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:9,
            image: 'women-dress (4).jpg',
            name:'jamaican regge shoe',
            prize: 234,
            category:'women',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:10,
            image: 'mens-suit.jpg',
            name:'jamaican regge shoe',
            prize: 3700,
            category:'men',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:11,
            image: 'beautiful-handbag.png',
            name:'jamaican regge shoe',
            prize: 2000,
            category:'handbag',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:12,
            image: 'women-dress (1).jpg',
            name:'jamaican regge shoe',
            prize: 2008,
            category:'women',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:13,
            image: 'women-dress (2).jpg',
            name:'jamaican regge shoe',
            prize: 2077,
            category:'women',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:14,
            image: 'women-dress (4).jpg',
            name:'jamaican regge shoe',
            prize: 4300,
            category:'women',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:15,
            image: 'pexels-lazaro-rodriguez-jr-6911546.jpg',
            name:'jamaican regge shoe',
            prize: 1290,
            category:'shoe',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:16,
            image: 'can.png',
            name:'jamaican regge shoe',
            prize: 2098,
            category:'shoe',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:17,
            image: 'casual-shoes (1).jpg',
            name:'jamaican regge shoe',
            prize: 9700,
            category:'shoe',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:18,
            image: 'sneaker2.png',
            name:'jamaican regge shoe',
            prize: 9070,
            category:'shoe',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:19,
            image: 'women-dress (6).jpg',
            name:'jamaican regge shoe',
            prize: 9820,
            category:'women',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
          {
            id:20,
            image: 'women-dress (3).jpg',
            name:'jamaican regge shoe',
            prize: 2709,
            category:'women',
            finalPrize:1,
            liked:false,
            size:'63',
            color:'black',
            madeIn:'tanzania',
          },
        ]
      )
    const [filtered,setFiltered] = useState(items)
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
          setFiltered(filtered.filter(item =>(item.id !== id)))
        }
    
        // function to delete an item from cart 
    
        const deleteCartItem = (id,amount)=>{
          setCart(carts.filter(cart =>(cart.id !== id)))
          setItemPrizes(itemPrizes.filter(itemPrize =>(itemPrize !== amount)))
        }
    
        // add item function 
    
        const addItem = (item)=>{
          const newItem = {...item,added:false}
          setFiltered([...filtered,newItem])
        }
    
        // show form state
        const [showAddForm, setShowAddForm] = useState('')
    
        // show form function 
        const showForm = () => (setShowAddForm(true))
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
        
        const updateData=(incomingData)=>{
          setItems(items.filter(item =>(item.id === incomingData.id ? {incomingData} : item)))
        }
        
        const onSearch = (letter)=>{
          setFiltered(items.filter(item => (item.name.trim().includes(letter))))
      }
    
      // funtion for liking an item 
    
      const like = (id)=> {
        setFiltered(filtered.map(item => (item.id === id ? { ...item, liked: !item.liked } : item)));
      }

      // filtering items by category 
      const filter = (category)=>{
        setFiltered(items.filter(filtered =>(filtered.category === category)))
      }

    // fallbacl to orinal data function 
    const fallBack = ()=>{
      setFiltered(items)
    }
    // show info modal state 
    const [showInfoModal, setShowInfoModal] = useState('')

    // function for opening more info modal 
    const openInfoModal =()=>{
      setShowInfoModal(true)
    }

    // function for closing more info modal 
    const closeInfoModal =()=>{
      setShowInfoModal(false)
    }

    const [active, setActive] =useState('')

    // function to update active item 
    const updateActive =(active)=>{
      setActive(active)
    }
    return(
        <GlobalContext.Provider value={{fallBack,items,like,onSearch,closeEditForm,showEditForm,editForm,closeForm,showForm,showAddForm,addItem,deleteCartItem,deleteItem,closeDisplayCart,filter,toggleCartDisplay,setItems,checkId,displayCart,editId,carts,total,filtered,openInfoModal,closeInfoModal,showInfoModal,active,updateActive,updateData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;