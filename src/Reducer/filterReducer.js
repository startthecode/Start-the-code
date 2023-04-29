export const filterReducer = (state,action) => {
let {type,payload} = action;

switch(type){ // eslint-disable-next-line
    case 'ReducerupdateList': return {productList:payload.productListPass};
    
    case 'ReducerpriceSorting': return {...state,priceSorting:payload.val};

    case 'Reducerrating': return {...state,rating:payload.val};

    case 'Reducerinstock': return {...state,instock:payload.val};

    case 'ReducerbastSeller': return {...state,bastSeller:payload.val};
    
case 'Reducerreset': return {...state,
    priceSorting:null,
    rating:null,
    instock:false,
    bastSeller:false
    };
    default: return {...state,
        priceSorting:null,
        rating:null,
        instock:false,
        bastSeller:false
        };

}// eslint-disable-next-line

    
}

