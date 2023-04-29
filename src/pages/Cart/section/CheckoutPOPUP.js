import { useState } from "react";
import { useEffect } from "react";
import { UseCart } from "../../../Context";
import { useNavigate } from "react-router-dom";
export const CheckoutPOPUP = ({updatePopup}) => {
let [userPersonalInfo,updateUserInfo] = useState({})
let { cartList,cartTotalPrice,emptyCart} = UseCart();
let navigate=  useNavigate()


let LoggedInUserToken = JSON.parse(sessionStorage.getItem('token'));
let LoggedInUserId = JSON.parse(sessionStorage.getItem('stcID'));
 useEffect(()=>{


async function getUserInfo(){
let getData = await fetch(`${process.env.REACT_APP_HOST}/600/users/${LoggedInUserId}`,{
  method:"GET",
  headers:{"content-type":'application/json', Authorization:`Bearer ${LoggedInUserToken}`}
}) 

let convertToJson = await getData.json();
updateUserInfo(convertToJson)

}

getUserInfo()
  },[]) //eslint-disable-line





async function placeOrder(event) {
event.preventDefault();

let orderDetails = {
orderedProducts:cartList,
orderTotal:cartTotalPrice,
orderQuantity:cartList.length,

userinfo:{
  email:userPersonalInfo.email,
  name:userPersonalInfo.name,
  id:userPersonalInfo.id

}
  }


 try{
  let sendFetchRequest = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,{
    method:"POST",
    headers:{"Content-type":"application/json", Authorization:`Bearer ${LoggedInUserToken}`},
    body:JSON.stringify(orderDetails)
  })

  let orderSubmit = await sendFetchRequest.json();
  navigate('/order-status', {state:{orderDetails:orderSubmit,orderStatus:true}})
  
  emptyCart()
 }
 catch(error){
  navigate('/order-status', {state:{orderStatus:false}})
  
 }

}
    return (

 
    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" onSubmit={placeOrder}>
  <p className="text-gray-800 font-medium flex justify-between">Customer information <span onClick={()=> updatePopup(false) } className="font-bold text-[30px] cursor-pointer">X</span></p>
  <div>
    <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
    <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder={userPersonalInfo.name ||' Your Name'}  defaultValue={userPersonalInfo.name} aria-label="Name"/>
  </div>
  <div className="mt-2">
    <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
    <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" defaultValue={userPersonalInfo.email} aria-label="Email"/>
  </div>
  <div className="mt-2">
    <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"/>
  </div>
  <div className="mt-2">
    <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"/>
  </div>
  <div className="inline-block mt-2 w-1/2 pr-1">
    <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"/>
  </div>
  <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
    <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"/>
  </div>
  <p className="mt-4 text-gray-800 font-medium">Payment information</p>
  <div className="">
    <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" defaultValue={`XXXXXXXXXX`} aria-label="Name"/>
  </div>
  <div className="mt-4">
    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">${cartTotalPrice}</button>
  </div>
</form>


  )
}

