
import { CardList } from "./section/CardList"
import { EmptyCart } from "./section/EmptyCart"
  import { UseCart } from "../../Context"
 export const CartPage = () => {
  let {cartList} = UseCart()

 
  
 
    return (
      cartList.length > 0 ? <CardList /> : <EmptyCart />
    )
  }
  

  