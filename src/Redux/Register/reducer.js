import {REGISTER_LOADING,REGISTER_SUCCESS,REGISTER_FAILURE , REGISTER_ERROR ,REGISTER_SUBMIT} from "./action" ; 

const initState = {
    loading : false  , 
    // isAuthenticated : false , 
    token  : "" , 
    error : false , 
    input_Submit : false,
     input_error : {}
}


const registerReducer = (store = initState , {type , payload})=>{
    switch (type){
        case REGISTER_LOADING : 
           return {...store , loading : true}
         case  REGISTER_SUCCESS :
            return {...store , loading :false , token : payload} 
         case REGISTER_FAILURE  : 
            return {...store , loading : false  ,  error : true }
         case REGISTER_ERROR :
             return {...store , loading : true , input_error : payload}
         case REGISTER_SUBMIT:
            return {...store , loading : false , error : false , input_Submit : true }
        default : return store ; 
    } ; 
   
}

export {registerReducer}