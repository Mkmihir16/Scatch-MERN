const express=require('express')
const app=express();
const cookieparse=require('cookie-parser')
const path=require('path')
const cors = require('cors')
const productSchema=require("./model/productschema")
const db=require("./config/mongoose-connnection")
const ownerroute=require("./routers/ownerRoute")
const productRoutes=require("./routers/productRoutes")
const session = require('express-session'); 
const flash = require('connect-flash'); 
const userRoutes=require("./routers/userRoutes")
const isLoggedin=require("./middlewares/isLoggedin")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    credentials: true,
  }));
app.use(cookieparse());
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,'public')))
// console.log(process.env.NODE_ENV)
app.get('/',(req,res)=>{
res.render("home")
})
app.use(session({ 
    secret:'geeksforgeeks', 
    saveUninitialized: false, 
    resave: false
}));
app.use(flash())
app.get('/shop',isLoggedin,async(req,res)=>{
    // res.render("shop")
    const data=await productSchema.find();
    // console.log(data)
    res.json(data);
})
app.use("/product",productRoutes)
app.use("/owner",ownerroute)
app.use("/user",userRoutes)

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})