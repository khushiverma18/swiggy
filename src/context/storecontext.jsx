import { createContext ,useState, useEffect} from 'react'
import { food_list } from '../assets/assets';
export const Storecontext = createContext()
const StorecontextProvider=(props)=> {
  const [cartitem , setcartitem]=useState({});
  
  
  const addtocart=(itemId)=>{
    if(!cartitem[itemId]){
      setcartitem((prev)=>({...prev,[itemId]:1}))
    }
    else{
      setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
  }

  const removecart = (itemId) => {
    setcartitem((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1; // Decrement the quantity if more than 1
      } else {
        delete updatedCart[itemId]; // Remove the item if quantity is 1
      }
      return updatedCart;
    });
  };
  
  

  useEffect(()=>{
console.log(cartitem);
  },[cartitem])

  const getTotalCartAmount = () => {
    return Object.keys(cartitem).reduce((total, itemId) => {
      const item = food_list.find((food) => food._id === itemId);
      if (item) {
        total += item.price * cartitem[itemId];
      }
      return total;
    }, 0);
  };

  const contextvalue={
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removecart,
    getTotalCartAmount
  }

  return (
    <Storecontext.Provider value={contextvalue}>
    {props.children}
    </Storecontext.Provider>
  )
}
export default StorecontextProvider;
