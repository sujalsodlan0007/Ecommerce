import express from 'express'
import dotenv from 'dotenv'
 import connectDB from './config/db.js'
dotenv.config()
 let port = process.env.PORT || 6000
let app = express() 
app.get("/",(req,res)=>{
    res.send("hello from serverr")
})
app.listen(port,()=>{
    console.log("hello from server")
    connectDB()
})
  