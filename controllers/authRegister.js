const usermodel=require("../model/user-model");
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config()
const generateToken=require('../utils/generateToken')
const registerfun=async (req,res)=>{
    try{
        const {fullname,email,password}=req.body;
        if(!fullname ||!email ||!password ){
            return res.send("Provide a full details of a user");
        }
        if( await usermodel.findOne({email})){
            console.log("User already exist.Please login")
            return res.send("User already exist.Please login")
        }
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
                if(err){ return res.send("error in hashing password")}
                else
                {
                const create= await  usermodel.create({fullname,email,password:hash});
                const token=generateToken(create);
                res.cookie('token',token);
                console.log("user created succcesfully")
                res.redirect("/shop")
                // console.log("user registeres")
                // console.log(fullname+" "+email+" "+password)
                // res.send(create);
            }
            })
        })
    }
    catch(error){
        
        console.log(error.message)
    }
}
const loginfun=async(req,res)=>{
    const {email,password}=req.body;
    const user=await usermodel.findOne({email})
    // console.log(user)
    if(!user ){
        console.log("This email or password is not valid")
        return res.send("This email or password is not valid")
    }
    else{
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                const token=generateToken(user)
                res.cookie('token',token)
                // res.send("Logges In")
                res.redirect("/shop")
            }
            else{
                console.log("Password is incorrect")
                res.send("Password  is incorrect")
            }

        })
    }
}
const logout=(req,res)=>{
    res.cookie('token','')
    res.redirect("/")
}
module.exports={
    registerfun,
    loginfun,
    logout
};
