const mongoose =require("mongoose")
const ownerschema=mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    products:{
        type:Array,
        default:[]
    },
    picture:{
        type:String
    }

})
module.exports=mongoose.model('ownerschema',ownerschema)