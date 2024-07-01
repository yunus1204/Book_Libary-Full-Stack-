import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleLogin=()=>{
       if(name===null || name.trim()===''){
        alert("Name feild is empty");
       }
       else if(password===null || password.trim()===''){
        alert("pasword field is empty");
       }
       else{
        navigate("/");
       }
    }
  return (
    <div>
      <label>Name :</label>
      <input type="text" onChange={(e)=> setName(e.target.value)}/>
      <label>Password :</label>
      <input type="text" onChange={(e)=> setPassword(e.target.value)}/><br></br>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have account</p>
      <button onClick={()=> navigate("/signup")}>Signup</button>
    </div>
  );
}

export default Login
