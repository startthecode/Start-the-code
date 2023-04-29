import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../Reducer/cartReducer";


const IntialValue = {
    cartList:[],
    cartTotalPrice:0
}


const CartProvider = createContext(IntialValue);
export const CartContext = ({children}) => {
    let [currentState,updateCurrentState] = useReducer(cartReducer,IntialValue)


function addtoCart(addingProduct){

let updateList = [...currentState.cartList,addingProduct];
let updateTotal = currentState.cartTotalPrice + addingProduct.price

updateCurrentState({
    type:'add_to_cart',
    payload:{
        products:updateList,
        total:updateTotal
    }
})
}

function removeFromCart(addingProduct){

    let updateList = currentState.cartList.filter(item => item.id !== addingProduct.id);
    let updateTotal = currentState.cartTotalPrice - addingProduct.price
    
    updateCurrentState({
        type:'remove_from_cart',
        payload:{
            products:updateList,
            total:updateTotal
        }
    })
    }



    function emptyCart(){
        
        updateCurrentState({
            type:'empty_from_cart'})
        }


let value = {
    cartList:currentState.cartList,
    cartTotalPrice:currentState.cartTotalPrice,
    addtoCart,
    removeFromCart,
    emptyCart
};
return(
    
<CartProvider.Provider value={value}>
    {children}
</CartProvider.Provider>
)
    
}


export const UseCart = () => useContext(CartProvider);
