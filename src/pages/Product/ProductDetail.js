import { Usefatch } from "../../hooks/Usefatch";
import { useParams } from 'react-router-dom' 
export const ProductDetail = () => {
  let {id} = useParams()
  let {productList} = Usefatch(`${process.env.REACT_APP_HOST}/products/${id}`)

// let {id,name,overview,price,poster,rating} = productCardDTL;
  
  return (
    <main className="bg-white max-w-[1320px] mx-auto">
  


    <div className="">
      <div className="pt-6 md:flex mt-10">
       
      
        
          <div className=" sm:overflow-hidden md:h-[500px]  sm:rounded-lg md:basis-4/12">
            <img
              src={productList.poster}
              alt={'original_title'}
              className="h-full w-full object-contain object-top "
            />
          </div>
          

        <div className=" px-4 pb-16 lg:pt-0 pt-2 md:basis-8/12">
          <div className="">
            <h1 className="text-2xl font-bold tracking-tight text-stone-800 dark:text-gray-400 sm:text-3xl">{productList.name}</h1>


            <button className="text-white mt-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>

          </div>


          <div className="py-10  text-md dark:text-gray-400  lg:pb-16 lg:pt-6">
            {'overview'}
            <div>
            <div className="flex flex-wrap mt-10">
        
          </div>
             
            </div>

            <div className="relative overflow-x-auto">

</div>

         

        
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}

