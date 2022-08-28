///action types
export const REGISTER_LOADING = "REGISTER_LOADING" ;
export const REGISTER_SUCCESS = "REGISTER_SUCCESS" ; 
export const REGISTER_FAILURE = "REGISTER_FAILURE" ; 
export const REGISTER_ERROR =   "REGISTER_ERROR" ;
export const REGISTER_SUBMIT = "REGISTER_SUBMIT" ; 

// action creater  // its a function that returns object
export const registerLoading = ()=>({
    type : REGISTER_LOADING  
})

export const registerSuccess = (payload)=>({
    type : REGISTER_SUCCESS , 
    payload 
})

export const registerfailure = (payload)=>({
    type :REGISTER_FAILURE  
  
})

export const registerError = (payload)=>({
    type : REGISTER_ERROR , 
    payload
  
})

export const registerSubmit = ()=>({
    type : REGISTER_SUBMIT
  
})