import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const signup = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phno,setPhno]=useState('');
  const [password,setPassword]=useState('');
  const [conpass,setConpass]=useState('');
  const navigate=useNavigate();

  const handleSignup=()=>{
    if(name===null || name.trim()===''){
      alert("Name feild is empty");
     }
     else if(email===null || email.trim()===''){
      alert("email field is empty");
     }
     else if(phno===null || phno.trim()===''){
      alert("Phone Number field is empty");
     }
     else if(password===null || password.trim()===''){
      alert("pasword field is empty");
     }
     else if(conpass===null || conpass.trim()===''){
      alert("Conform pasword field is empty");
     }
     else if(password!=conpass){
      alert("Conform password is not as password");
     }
     else{
      navigate("/login");
     }
  }

  return (
    <div>
      <label>Name :</label>
      <input type="text" onChange={(e)=> setName(e.target.value)}/><br></br>
      <label>Email :</label>
      <input type="text" onChange={(e)=> setEmail(e.target.value)}/><br></br>
      <label>Phone :</label>
      <input type="text" onChange={(e)=> setPhno(e.target.value)}/><br></br>
      <label>Password :</label>
      <input type="text" onChange={(e)=> setPassword(e.target.value)}/><br></br>
      <label>Conform Password :</label>
      <input type="text" onChange={(e)=> setConpass(e.target.value)}/><br></br>
      <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default signup
