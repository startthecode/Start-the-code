import { Usefatch } from "../../../hooks/Usefatch";
import { ProductCard } from "../../../components/Elements/ProductCard";

export const FeaturedSection = () => {
    let {productList} =Usefatch(`${process.env.REACT_APP_HOST}/featured_products`);
// console.log(productList)
  return (
   <>
  <div className="flex flex-wrap justify-between max-w-[1320px] mx-auto pl-[10px]">
  {productList && productList.map(val => (
<ProductCard productCardDTL={val} key={val.id} col='4' />
   ))}
  </div>
   
   </>
  )
}


