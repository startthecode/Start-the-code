import { Link } from "react-router-dom";
import { StarRating } from "../"
import { UseCart } from "../../Context";
import { useEffect, useState } from "react";

export const ProductCard = ({productCardDTL,col=3}) => {
let {id,name,price,poster,rating} = productCardDTL;
let { cartList,addtoCart,removeFromCart} = UseCart();
let [incart,updateInCrt] = useState(false)



useEffect(()=>{
let productPresenceInCart = cartList.find(val=>val.id=== productCardDTL.id);

productPresenceInCart ? updateInCrt(true) : updateInCrt(false)
},[cartList,productCardDTL.id])


  return (
  
 <>

<div className={`
lg:basis-${col}/12 md:basis-4/12 basis-12/12 pr-[10px] mb-5 h-full`}>

    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full">
    <p>
        <img className="p rounded-t-lg" src={poster} alt={name} />
    </p>
    <div className="px-5 pb-5">
        <p>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-8">{name}</h5>
        </p>
        <div className="flex items-center mt-2.5 mb-7">
          <StarRating ratings ={rating}/>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating+'.0'}</span>
        </div>
        <div className="flex items-center justify-between ">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{price}</span>
           
            <Link to={`/product/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>

           { incart ? (<button onClick={() => removeFromCart(productCardDTL) } className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove</button>) : ( <button onClick={() => addtoCart(productCardDTL) } className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>)}


        </div>
    </div>

    </div>
   
</div>


 </>

  )
}

