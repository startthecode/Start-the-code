import { Link } from "react-router-dom"

export const OrderSucess = () => {
  return (
    <div>
     
     
     <h1 className="text-[60px] text-center my-10"> 

     sucesss    
     
     
     
     </h1>
     <Link to='/products' class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block mx-auto">Countinue Shopping</Link>
    
    </div>
  )
}


