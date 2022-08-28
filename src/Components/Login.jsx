 import {useState} from "react" ; 
 import {useSelector , useDispatch} from "react-redux" ; 
import {loginLoading, loginSuccess ,  loginfailure, validationError , validationSubmit } from "../Redux/Login/action" ; 
import {useNavigate , Link} from "react-router-dom" ; 
import "./login.css"
import Button from '@material-ui/core/Button';
 

export const Login = ()=>{

  const {loading , 
    isAuthenticated , 
    token, 
    error, 
    input_Submit,
    input_error} = useSelector((state)=>state.login)


     const navigate = useNavigate() ; 

     const dispatch = useDispatch() ; 

   const [users , setUser] = useState({
        email : "" , 
        password : "" , 
    }) 

    const handleChange =(e)=>{
        const {name} = e.target ; 
        setUser({...users , [name] : e.target.value})
       
   }
 
   const handleSubmit=()=>{
        const err = (validate(users))
        dispatch(validationError(err))
        dispatch(validationSubmit())
         if(Object.keys(input_error)== 0  && input_Submit == true){
            PostData() ; 
         } else {
            window.alert("wrong credentials") ; 
         }
        
      }

     const PostData = ()=>{
        const userDetails = users

        dispatch(loginLoading()) ; 
        try{
            fetch(`https://backendsasi1.herokuapp.com/login` , {
            method : "POST" , 
            headers : {
                "Content-Type" : "application/json"
            } , 
            body : JSON.stringify(userDetails) 
        }).then((res)=>res.json())
          .then((res)=>{
            dispatch(loginSuccess(res.token)) 
            window.alert("Login Sucessfull");
            setTimeout(()=>{
                navigate("/") ;
            },500) ;  
        })
        }catch(err){
           return dispatch(loginfailure()) ; 
        }
       
     } ; 

     const validate=(values)=>{
        const errors = {} ; 
        const reges =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!values.email){
        errors.email = "This is not valid email"
      }else if(!reges.test(values.email)){
       errors.email = "This is not valid email formate"
     }
      if(!values.password){
        errors.password = "This is not valid password" ; 
      }else if(values.password.length < 4){
       errors.password = "password must be more than 4 character" ; 
      }else if(values.password.length > 8){
         errors.password = "password must be less than 8 character" ; 
      }
         return errors  ; 
   } 


     
    return  (
        <>
        {loading ? (<h1 style = {{textAlign : "center"}}>{"...Loding"}</h1>) : isAuthenticated ? <h1 style = {{textAlign : "center"}}>Login Successfull</h1> : <h1 style = {{textAlign : "center"}}>Login</h1>}
        <div className = "container">
          <form onSubmit={(e)=>{
                  e.preventDefault() ; 
          }}> 
          
              <label>Email </label><br/>
              <input onChange={handleChange} name = "email" type = "email" placeholder='Enter email'/><br/>
              <p>{input_error.email}</p>
              <label>Password</label><br/>
              <input onChange={handleChange} name = "password" type = "password" placeholder = "Enter password"/>
              <p>{ input_error.password}</p>
          </form> 
          <Button onClick = {handleSubmit} 
          style = {{ padding : "10px" , width : "90%" , marginTop : "25px",   marginRight : "20px",}} variant="contained" color="primary" disableElevation>
              Login
            </Button> 
         {/* <p style = {{textAlign : "center" , marginTop : "10px" , fontWeight : "bolder"}}>or</p> */}

       {/* <Link style = {{textDecoration : "none"}} 
             to = "/signup">
              <Button  style = {{ padding : "10px"  , width : "90%" , marginRight : "20px" ,   marginBottom : "10px"}} variant="contained" color="primary" disableElevation>
              Rigester
           </Button>
        </Link> */}
          {/* <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />, */}

        </div>
    </>
        
    )
}