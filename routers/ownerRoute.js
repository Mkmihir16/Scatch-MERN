const express=require('express')
const router=express.Router();
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
const ownerModel=require("../model/ownersmodel");
const upload=require("../config/multer-config")
const e = require('express');
const { has } = require('config');
const generateToken = require('../utils/generateToken');
const userModel = require('../model/user-model');
router.get('/',(req,res)=>{
    res.send("Lets Started")
})
// if(process.env.NODE_ENV=="development"){
    // }
    // router.post("/create",async (req,res)=>{
    //    const model= await ownerModel.find();
    //    if(model.length>0){
    //     return res.status(500).send("You have a owner you cannot create anymore")
    //    }
    //    const {fullname,email,password}=req.body;
    //    const newmodel= await ownerModel.create(
    //     {fullname,email,password}
    //    )
    //    res.status(201).send(newmodel)
    // })
    router.post("/admin/register", async(req,res)=>{
        if(!req.body.fullname || !req.body.email ||!req.body.password){
            return res.send("Details are incomplete.")
        }
        const {fullname,email,password}=req.body
        const user=await ownerModel.findOne({email})
        if(user){
            return res.send("User exists already.Please Login")
        }
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                const data=await ownerModel.create({
                    fullname,
                    email,
                    password:hash,
                })
                const token=generateToken(data)
                return res.cookie('token',token)
                res.send()
            });
        });
    })
    router.post("/admin/login",async(req,res)=>{
        const {email,password}=req.body
        const user=await ownerModel.findOne({email});
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                const token=generateToken(user)
                res.cookie('token',token)
               return res.send("login successfully")
            } 
           return res.send("Password is incorrect")
        })

    })

router.get("/admin/create",(req,res)=>{
    res.render("createProduct")
})

// console.log(process.env.NODE_ENV);
module.exports=router;
// $env:NODE_ENV="development"