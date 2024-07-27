const express=require('express')
// const authregister =require('../controllers/authRegister')
const {registerfun,loginfun,logout} =require("../controllers/authRegister")
const router=express.Router();
router.get('/',(req,res)=>{
    res.send("Lets Started")
})
// console.log(process.env)
router.post('/register',registerfun)
router.post('/login',loginfun)
router.get('/logout',logout)
module.exports=router;