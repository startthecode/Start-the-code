
export const SummaryCard = ({orderSummaryList}) => {


  return (
    
<>




{
    orderSummaryList.map(val=>(
<div key={val.id} className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    <div className="flex justify-between w-full"> 
                    
                     <h1 className="text-[30px]"><strong className="text-xl">Order Count </strong> {val.orderedProducts.length}
                      
                      </h1>
                      <p className="block"> total ${val.orderTotal}</p></div>
                      {
                        val.orderedProducts.map(item=>(

                            <div key={item.id} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                <img className="w-full hidden md:block" src={item.poster} alt="dress" />
                                <img className="w-full md:hidden" src={item.poster} alt="dress" />
                            </div>
                            <div className="md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
                                    
                                </div>
                                <div className="flex justify-between space-x-8 items-start w-full">
                                    <p className="text-base dark:text-white xl:text-lg leading-6"> <span className="text-red-300 line-through"> ${Number(item.price) + 50}</span></p>
                                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                                    <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${item.price}</p>
                                </div>
                            </div>
                          </div>

                        ))
                      }
                    </div>
    ))
}

</>
    
  )
}

