const mongoose =require("mongoose")

const userschema=mongoose.Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    cart:{
        type:Array,
        default:[]
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:{
        type:Number
    },
    picture:{
        type:String
    }

})
module.exports=mongoose.model('userschema',userschema)