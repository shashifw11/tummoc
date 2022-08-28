 import React from "react" ; 
 import {useSelector} from "react-redux" ; 
 import {Navigate} from "react-router-dom" ; 

export const Home = ()=>{
    const {token , isAuthenticated} = useSelector((state)=>state.login)
     console.log(token,isAuthenticated)
    //    const Navigate = useNavigate() ; 

    //  if(!isAuthenticated){
    //    return <Navigate to ="/login"/>   
    //  }
     return <div>shashi</div>
}