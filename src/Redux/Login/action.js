///action types
export const LOGIN_LOADING = "LOGIN_LOADING" ;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" ; 
export const LOGIN_FAILURE = "LOGIN_FAILURE" ; 
export const VALIDATION_ERROR = "VALIDATION_ERROR" ;
export const VALIDATION_SUBMIT = "SUBMIT" ; 

// action creater  // its a function that returns object
export const loginLoading = ()=>({
    type : LOGIN_LOADING  
})

export const loginSuccess = (payload)=>({
    type : LOGIN_SUCCESS , 
    payload 
})

export const loginfailure = (payload)=>({
    type : LOGIN_FAILURE  
  
})

export const validationError = (payload)=>({
    type : VALIDATION_ERROR , 
    payload
  
})

export const validationSubmit = ()=>({
    type : VALIDATION_SUBMIT 
  
})