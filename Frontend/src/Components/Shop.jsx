import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
const Shop = () => {
    const[data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3000/shop").then((response)=>{
            setData(response.data)
        })
    },[])
    data.map((val,index)=>{
      console.log(val.price)
    })
    const handlelogout=()=>{
      axios.get("http://localhost:3000/user/logout").then(()=>{
        console.log("User logout")
        navigate("/")
      }).catch((error)=>{
        console.log("you got an error")
      })
    }
  return (
    <div className='h-full'>
      <h1>It is a Shop Page</h1>
      <div className='flex flex-wrap'>
      {data.map((val,index)=>{
        return<div className={`flex h-fit mx-12 flex-col bg-#${val.bgcolor}`} style={{ backgroundColor: `#${val.bgcolor}`}}>
            <div className="image" >
                <img  className="h-56 w-52" src={val.image} alt=""/>
            </div>
            <div  className='flex flex-col justify-between'style={{ backgroundColor: `#${val.panelcolor}`}} >
            <p className='text-black' style={{color: `#${val.textcolor}`}}>{val.name}</p>
            <p className='text-black' style={{ color: `#${val.textcolor}`}}> &#8377; {val.price}</p>
            </div>
        </div>
      })}
      </div>
      <button className='bg-red-500 text-white font-semibold p-3' onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Shop
