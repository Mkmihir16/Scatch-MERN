const express=require('express')
const router=express.Router();
const ownerModel=require("../model/ownersmodel");
const upload=require("../config/multer-config")
const e = require('express');
router.get('/',(req,res)=>{
    res.send("Lets Started")
})
if(process.env.NODE_ENV=="development"){
    router.post("/create",async (req,res)=>{
       const model= await ownerModel.find();
       if(model.length>0){
        return res.status(500).send("You have a owner you cannot create anymore")
       }
       const {fullname,email,password}=req.body;
       const newmodel= await ownerModel.create(
        {fullname,email,password}
       )
       res.status(201).send(newmodel)
    })
}
router.get("/admin/create",(req,res)=>{
    res.render("createProduct")
})

// console.log(process.env.NODE_ENV);
module.exports=router;
// $env:NODE_ENV="development"