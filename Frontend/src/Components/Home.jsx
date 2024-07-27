import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true;
import ProtectedRoute from './ProtectedRoute';
const Home = () => {
  const[rname,setRname]=useState('');
  const[remail,setRemail]=useState('');
  const[rpassword,setRPassword]=useState('');
  const[lemail,setLemail]=useState('');
  const[lpassword,setLPassword]=useState('');
  const navigate=useNavigate();
  const handleregister=(e)=>{
    e.preventDefault();
    const fullname=rname;
    const email=remail;
    const password=rpassword;
    const data={
      fullname,
      email,
      password
    }
    axios.post("http://localhost:3000/user/register",data).then(()=>{
     navigate("/shop")
    }).catch((error)=>{
      console.log("error while registering")
    })
  }
  const handlelogin=(e)=>{
    e.preventDefault();
    const email=lemail;
    const password=lpassword;
    const data={
      email,
      password
    }
    axios.post("http://localhost:3000/user/login",data).then(()=>{
     navigate("/shop")
    }).catch((error)=>{
      console.log("error while registering")
    })
  }
  return (
    <div>
      <h1>IT'S A HOME PAGE</h1>
    <div className='flex justify-evenly'>
      <div className="register">
        <h1>Register</h1>
        <form  className='flex flex-col'>
               <input className='border-2 mt-3 border-solid border-slate-950' onChange={(e)=>setRname(e.target.value)} type="text" name='fullname' placeholder='name' />
               <input className='border-2 mt-3 border-solid border-slate-950' onChange={(e)=>setRemail(e.target.value)} type="email" name='email' placeholder='email' />
               <input className='border-2 mt-3 border-solid border-slate-950' onChange={(e)=>setRPassword(e.target.value)} type="text" name='password' placeholder='password' />
               <button type='submit' className='px-4 py-2  bg-gray-400 mt-2' onClick={handleregister}>Register</button>
        </form>
      </div>
      <div className="login flex flex-col">
        <h1>Login</h1>
        <form  className='flex flex-col'>
               <input className='border-2 mt-3 border-solid border-slate-950' onChange={(e)=>setLemail(e.target.value)}  type="email" name='email' placeholder='email' />
               <input className='border-2 mt-3 border-solid border-slate-950' onChange={(e)=>setLPassword(e.target.value)}  type="text" name='password' placeholder='password' />
               <button type='submit' onClick={handlelogin} className='px-4 py-2 bg-gray-400 mt-2'>Login</button>
        </form>
      </div>
    </div>
      <Link to="/create/product">
        <button className='px-4 py-2  bg-gray-400 mt-2'>Button</button>
      </Link>
    </div>
  )
}

export default Home
