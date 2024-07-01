import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Users from './Users';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup"element={<Signup />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
