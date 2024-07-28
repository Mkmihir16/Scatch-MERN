import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Adminlogin = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate();
    const handlelogin=(e)=>{
        e.preventDefault()
        const data={
            email,
            password
        }
        axios.post("http://localhost:3000/owner/admin/login",data).then(()=>{
            console.log("Admin login succesfully")
            navigate("/create/product")

        }).catch((error)=>{
            console.log("Error while login a admin")
        })
    }
  return (
    <div>
      <form>
        <input type="text" placeholder='Email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Password' name='password'onChange={(e)=>setPassword(e.target.value)} />
        <button className='px-5 py-2 bg-blue-300 text-white font-bold' onClick={handlelogin}>Submit</button>
      </form>
    </div>
  )
}

export default Adminlogin
