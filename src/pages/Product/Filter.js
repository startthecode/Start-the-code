
import { useFilter } from "../../Context"



export const Filter = () => {
let {currentState,updateState} = useFilter();

  return (

<div className="max-w-[250px] px-5 py-5 w-full absolute left-0 top-0 h-full bg-white">
<div className="mb-8">

<p className="text-lg">Sort By</p>

<div className="flex items-center mb-4" onClick={()=>updateState({type:'ReducerpriceSorting',payload:{val:'HighToLow'}}) }>
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">High to low</label>
</div>
<div className="flex items-center" onClick={()=>updateState({type:'ReducerpriceSorting',payload:{val:'LowToHigh'}}) }>
    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Low to High</label>
</div>

</div>



<div className="mb-8">

<p className="text-lg">by star</p>

<div className="flex items-center mb-2">
    <input id="default-radio-2-1" type="radio" value="" name="default-radio-2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" 
    onClick={()=> {updateState({type:'Reducerrating',payload:{val:'oneANDabove'}})}}
    >Star 1</label>
</div>
<div className="flex items-center mb-2">
    <input id="default-radio-2-2" type="radio" value="" name="default-radio-2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" 
     onClick={()=> {updateState({type:'Reducerrating',payload:{val:'twoANDabove'}})}}
    >Star 2</label>
</div>

<div className="flex items-center mb-2">
    <input id="default-radio-2-3" type="radio" value="" name="default-radio-2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    onClick={()=> {updateState({type:'Reducerrating',payload:{val:'threeANDabove'}})}}
    >Star 3</label>
</div>

<div className="flex items-center mb-2">
    <input id="default-radio-2-4" type="radio" value="" name="default-radio-2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
     onClick={()=> {updateState({type:'Reducerrating',payload:{val:'fourANDabove'}})}}
    > Star 4</label>
</div>

<div className="flex items-center mb-2">
    <input id="default-radio-2-5" type="radio" value="" name="default-radio-2" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2-5" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
     onClick={()=> {updateState({type:'Reducerrating',payload:{val:'fiveStar'}})}}
    > Star 5</label>
</div>

</div>


<div className="mb-8">
<p className="text-lg">Stock</p>

<div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    
    onClick={()=> {updateState({type:'Reducerinstock',payload:{val:!currentState.instock}})}}
    >In stock</label>
</div>
<div className="flex items-center">
    <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    onClick={()=> {updateState({type:'ReducerbastSeller',payload:{val:!currentState.bastSeller}})}}
    >Out of Stock</label>
</div>

</div>
<button className="text-white bg-blue-700 hover:bg-blue-800 cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=> updateState({type:'Reducerreset'})}>Reset Filter</button>
</div>
    )
}


