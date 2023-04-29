import { useLocation } from "react-router-dom"
import { OrderSucess } from "../components"

import { OrderFailed } from "../components"

export const OrderStatus = () => {
    let {state} = useLocation();
  return (
    <>
    
    {state.orderStatus ? <OrderSucess /> : <OrderFailed />}

    </>
  )
}




