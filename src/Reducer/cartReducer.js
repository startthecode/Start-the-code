
export const cartReducer = (state,action) => {

let {type,payload} = action;

switch(type){
    case "add_to_cart" : return {cartList:payload.products,cartTotalPrice:payload.total};
    case "remove_from_cart" : return {cartList:payload.products,cartTotalPrice:payload.total};
    case "empty_from_cart" : return {cartList:[],cartTotalPrice:0};
    default: return {cartList:[],cartTotalPrice:0}
   
}


}


