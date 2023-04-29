import { useEffect, useState } from "react"
import { ProductCard } from "../../components/Elements/ProductCard"
import { Usefatch } from "../../hooks/Usefatch"
import { Filter } from "./Filter"
import { useLocation } from "react-router-dom"
import { useFilter } from "../../Context"
export const ProductList = () => {
// let [productItems,updateProductItems]  = useState([])
let searchedQuery = useLocation().search;
let getSeachedValue = new URLSearchParams(searchedQuery).get('q')
let [hideShow,hideShowUpdate] = useState(true);
let {productArray,productListFILTERD} = useFilter();
let {productList} = Usefatch(`${process.env.REACT_APP_HOST}/products?name_like=${getSeachedValue || ''}`)
useEffect(()=>{
productArray(productList)
},[productList ]) //eslint-disable-line




  return (
  <>

<div className="main">
<div className={hideShow ? 'hidden': ''}>
<Filter />
</div>
  <div onClick={()=> hideShowUpdate(!hideShow)} className="flex cursor-pointer justify-end max-w-[1320px] mx-auto my-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
</div>
  <div className="max-w-[1320px] mx-auto flex flex-wrap">
  {productListFILTERD.map(val=>(
  <ProductCard key={val.id} productCardDTL={val} />
   ))}
  </div>
</div>
  </>
  )
}

