import { useEffect, useState } from "react"



export function Usefatch(url) {
    let [productList,updateProductList]= useState([])

useEffect(()=>{

        let productFetch = async function(){
       try{
        let fetching = await fetch(url);
      
        let jsonConvert = await fetching.json();
        updateProductList(jsonConvert)
       }
       catch(errro){
            console.log('sahi daal bhai')

       }
     
          }
        

          productFetch()
},[url])
    

  return {productList};
}
