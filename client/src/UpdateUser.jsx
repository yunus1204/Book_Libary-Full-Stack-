import axios from 'axios';
import React, { useState , useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const UpdateUser = () => {
    const {id}=useParams();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');
    const navigate=useNavigate();

    useEffect(()=>{
      axios.get(`http://localhost:3001/Updating/${id}`)
      .then((response)=>{
        console.log(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setAge(response.data.age);
      })
      .catch((error)=>{
        console.log(error);
      });
    },[id]);  

    const submit=()=>{
      axios.put(`http://localhost:3001/updateUser/${id}`,{name,email,age})
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
      navigate("/");
    }

  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={submit}>
        <h2>Update User</h2>
        <div className='mb-2'>
        <label htmlFor=''>Book Name</label>
        <input type="text" placeholder='Enter Name' value={name}className='form-control' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='mb-2'>
        <label htmlFor=''>Author</label>
        <input type="text" placeholder='Enter Email' value={email} className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='mb-2'>
        <label htmlFor=''>Book Id</label>
        <input type="number" placeholder='Enter Age' value={age} className='form-control' onChange={(e)=> setAge(e.target.value)}/>
        </div>
        <button className='btn btn-success' type='submit'>Update</button>
      </form>
    </div></div>
    </div>
  )
}

export default UpdateUser
