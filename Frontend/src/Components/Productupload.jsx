import React from 'react'
import { useState } from 'react';
import axios from 'axios'
const Productupload = () => {
const[name,setName]=useState("");
const[price,setPrice]=useState("");
const[discount,setDiscount]=useState("");
const[bgcolor,setbgcolor]=useState("");
const[panelcolor,setpanelcolor]=useState("");
const[textcolor,settextcolor]=useState("");
const[image,setImage]=useState(null);
// const [imageBuffer, setImageBuffer] = useState(null);
    const handlereq=async(e)=>{
        e.preventDefault()
        const formdata=new FormData();
        formdata.append('image',image)
        formdata.append('name',name)
        formdata.append('price',price)
        formdata.append('discount',discount)
        formdata.append('bgcolor',bgcolor)
        formdata.append('panelcolor',panelcolor)
        formdata.append('textcolor',textcolor)
        await axios.post("http://localhost:3000/product/createpro",formdata).then(()=>{
            console.log("data upload successfully")
        }).catch((error)=>{
            console.log("You got an error")
        })
    }
  return (
    <div>
      <form encType='multipart/form-data'>
        <input type="file" name='image' onChange={(e)=>setImage(e.target.files[0])} />
        <input type="text" name='name' onChange={(e)=>setName(e.target.value)} placeholder='name'/>
        <input type="text" name='price' onChange={(e)=>setPrice(e.target.value)} placeholder='price'/>
        <input type="text" name='discount' onChange={(e)=>setDiscount(e.target.value)} placeholder='discount'/>
        <input type="text" name='bgcolor' onChange={(e)=>setbgcolor(e.target.value)} placeholder='bgcolor'/>
        <input type="text" name='panelcolor' onChange={(e)=>setpanelcolor(e.target.value)} placeholder='panelcolor'/>
        <input type="text" name='textcolor' onChange={(e)=>settextcolor(e.target.value)} placeholder='textcolor'/>
        <button onClick={handlereq}>Submit</button>
      </form>
    </div>
  )
}

export default Productupload
