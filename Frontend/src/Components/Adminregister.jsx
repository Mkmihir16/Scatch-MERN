import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Adminregister = () => {
    const [fullname,setFullname]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate();
    const handleregister=(e)=>{
        e.preventDefault()
        const data={
            fullname,
            email,
            password
        }
        axios.post("http://localhost:3000/owner/admin/register",data).then(()=>{
            console.log("Admin register succesfully")
            navigate("/create/product")

        }).catch((error)=>{
            console.log("Error while registering a user")
        })
    }
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Name' name='fullname' onChange={(e)=>setFullname(e.target.value)}/>
        <input type="text" placeholder='Email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Password' name='password'onChange={(e)=>setPassword(e.target.value)} />
        <button className='px-5 py-2 bg-blue-300 text-white font-bold' onClick={handleregister}>Submit</button>
      </form>
    </div>
  )
}

export default Adminregister
