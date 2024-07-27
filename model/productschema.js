const mongoose =require("mongoose")
const productschema=mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:Number
    }, 
    discount:{
        type:Number,
        default:[]
    },
    bgcolor:{
        type:String
    },
    panelcolor:{
        type:String,
       
    },
    textcolor:{
        type:String
    }
})
module.exports=mongoose.model('products',productschema)