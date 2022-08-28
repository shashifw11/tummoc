export const GET_PRODUCTS = "GET_PRODUCTS" ; 

export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING" ; 

export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR" ; 

export const getProducts = (payload)=>({
         type :  GET_PRODUCTS , 
         payload 
})

export const getProductsLoading = (payload)=>({
    type :  GET_PRODUCTS_LOADING , 
    payload 
})

export const getProductsError = (payload)=>({
    type :  GET_PRODUCTS_ERROR , 
    payload 
})