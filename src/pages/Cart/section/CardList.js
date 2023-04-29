import { useState } from 'react'
import { CartCards } from '../components/CartCards';
import { CheckoutPOPUP } from './CheckoutPOPUP';
import { UseCart } from '../../../Context';






 export const CardList = () => {
    let [popup,updatePopup] = useState(false)
    let {cartList,cartTotalPrice} = UseCart()
    console.log(cartList)


    return (
     <>

{popup ? <CheckoutPOPUP cartTotalPrice={cartTotalPrice} updatePopup={updatePopup} /> : ''}
      <div className='max-w-[1200px] mx-auto'>

      <div className="mt-8">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            {cartList.map((product) => (
             <CartCards key={product.id} product={product}></CartCards>
            ))}
          </ul>
        </div>
      </div>


    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>${cartTotalPrice}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
      <div className="mt-6">
        <button onClick={()=> updatePopup(!popup)}
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </button>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>

      </div>



     </>
    )
  }
  

  