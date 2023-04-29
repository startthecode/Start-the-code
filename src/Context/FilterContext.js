// import { sort } from "json-server-auth"
import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../Reducer/filterReducer";


let initialValue = {
    productList:[],
    priceSorting:null,
    rating:null,
    instock:false,
    bastSeller:false
}


let FilterProvider = createContext(initialValue);

export const FilterContext = ({children}) => {

  let [currentState,updateState] = useReducer(filterReducer,initialValue)
function productArray(productlists){

 updateState({
  type:'ReducerupdateList',
  payload:{
    productListPass:productlists
  }
 })
}

function priceSortings(products){
  let [...extract] = products;
if(currentState.priceSorting === "LowToHigh"){
  
  return  extract.sort((a,b)=> Number(a.price) - Number(b.price)) 
}
else if(currentState.priceSorting === "HighToLow"){
  return extract.sort((a,b)=> Number(b.price) - Number(a.price))
}
else{
  return products
}
}



function ratingSorting(products){

  if(currentState.rating === 'fiveStar'){
    return products.filter(val=> Number(val.rating) >= 5)
  }
  else if(currentState.rating === 'fourANDabove'){
    return products.filter(val=> Number(val.rating) >= 4)
  }
  else if(currentState.rating === 'threeANDabove'){
    return products.filter(val=> Number(val.rating) >= 3)
  }
  else if(currentState.rating === 'twoANDabove'){
    return products.filter(val=> Number(val.rating) >= 2)
  }

  else if(currentState.rating === 'oneANDabove'){
    return products.filter(val=> Number(val.rating) >= 1)
  }
else{
  return products 
}
}

function instockSorting(products){
if(currentState.instock){
  return products.filter(val => val.in_stock)
}

return products
}

function bestSellerSorting(products){
  if(currentState.bastSeller){
    return products.filter(val=> val.best_seller )
  }
  
  return products
  }



 let filteredProduct = bestSellerSorting(instockSorting(ratingSorting(priceSortings(currentState.productList))))


let value = {
    productListFILTERD:filteredProduct,
    productArray,
    currentState,
    updateState
}
  return (
  
    <FilterProvider.Provider value={value}>
       { children}
    </FilterProvider.Provider>

  )
}


export let useFilter = ()=> useContext(FilterProvider);