import { Routes,Route } from "react-router-dom"
import {Home,ProductDetail,ProductList,CartPage,Login,Register,Dashboard,OrderStatus} from '../pages';
import { TransferToLoginPage } from "./TransferToLogin";


export const AllRoutes = () => {
  return (
  <>
  
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<ProductList />} />
<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/login" element={<Login  />} />
<Route path="/register" element={<Register  />} />
<Route path="/cart" element={<TransferToLoginPage> <CartPage/> </TransferToLoginPage>} />

<Route path="/dashboard" element={<Dashboard />} />
<Route path="/order-status" element={<OrderStatus />} />






  </Routes>
  </>
  )
}


