import {LOGIN_LOADING , LOGIN_SUCCESS , LOGIN_FAILURE,VALIDATION_ERROR , VALIDATION_SUBMIT } from "./action" 

const initState = {
    loading : false  , 
    isAuthenticated : false , 
    token  : "" , 
    error : false , 
    input_Submit : false,
     input_error : {}
}

const loginReducer = (store = initState , {type , payload})=>{
    switch (type){
        case LOGIN_LOADING : 
           return {...store , loading : true}
         case  LOGIN_SUCCESS :
            return {...store , loading :false , isAuthenticated : true, token : payload} 
         case LOGIN_FAILURE : 
            return {...store , loading : false  ,  error : true }
         case VALIDATION_ERROR :
             return {...store , loading : true , isAuthenticated : false , input_error : payload}
         case VALIDATION_SUBMIT :
            return {...store , loading : false , isAuthenticated : false  , error : false , input_Submit : true }
        default : return store ; 
    } ; 
   
}

export {loginReducer}