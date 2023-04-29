import { useLocation } from "react-router-dom"
import { OrderFailed } from "../components"
import { OrderSucess } from "../components"

export const OrderStatus = () => {
    let {state} = useLocation();
  return (
    <>
    {state.orderStatus ? <OrderSucess /> : <OrderFailed />}

    </>
  )
}




