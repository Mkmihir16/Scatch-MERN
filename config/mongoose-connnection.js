const mongoose=require('mongoose')
const config=require("config")
mongoose.connect(`${config.get("MONGODB_URI")}/Scatch`).then(()=>{
    console.log("Database Connected")
}).catch((err)=>console.log("error with database"))
module.exports=mongoose.connection;