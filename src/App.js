// import logo from './logo.svg';
// import './App.css';

import React from "react" ; 
import {Routes , Route} from "react-router-dom" ; 
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";

function App() {
  return (
   <>
   <Routes>
    <Route path = "/" element = {<Home/>}></Route>
    <Route path = "/Login" element = {<Login/>}></Route>
   </Routes>

   </>
  );
}

export default App;
