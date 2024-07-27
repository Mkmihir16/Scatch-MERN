const jwt=require('jsonwebtoken')
const usermodel=require('../model/user-model')

const isLoggedin=async(req,res,next)=>{
    if(!req.cookies.token){
        req.flash("error","You dont have token")
       return res.redirect("/")
    }
    else{
        try{
            const result=jwt.verify(req.cookies.token,process.env.JWTTOKEN)
            const user=usermodel.findOne({email:result.email}).select("-password")
            req.user=user;
            next();
        }
        catch(err){
            req.flash("error","You dont have token")
            return res.redirect("/")
        }
    }

}
module.exports=isLoggedin;