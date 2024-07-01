import React, { useState ,useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const Users = () => {

    const [user,setUser]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser')
        .then((response)=>{
            setUser(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    });

    const handleDelete=(id)=>{
      axios.delete('http://localhost:3001/deleting/'+id)
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
      <table className='table'>
        <thead>
            <tr>
                <th>Book Name </th>
                <th>Author </th>
                <th>Book Number </th>
                <th>Action </th>
            </tr>
        </thead>
        <tbody>
            {
            user.map((i)  => {
                return <tr>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.age}</td>
                    <td>
                    <Link to={`/update/${i._id}`} className='btn btn-success' >Edit</Link>
                        <button className='btn btn-danger' onClick={()=> {handleDelete(i._id)}}>Delete</button>
                        </td>
                </tr>
            })
        }
        </tbody>
      </table>
    </div></div>
  )
}

export default Users
