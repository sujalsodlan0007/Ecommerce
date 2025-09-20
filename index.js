import express from 'express'
import dotenv from 'dotenv'
 import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
dotenv.config()
 let port = process.env.PORT || 6000
let app = express() 

 app.use(express.json())
 app.use(cookieParser())
import authRoutes from './routes/authRoutees.js'
app.use("/api/auth", authRoutes)


app.get("/",(req,res)=>{
    res.send("hello from serverr")
})
app.listen(port,()=>{
    console.log("hello from server")
    connectDB()
})
  