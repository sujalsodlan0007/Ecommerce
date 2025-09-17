import mongoose from "mongoose";
const connectDB = async () => {
    try{
      await mongoose.connect(process.env.MONGODB_URL)
      console.log("Db connected")
    
    }  
    catch(error){
        console.log("DB Error")
    }
    }
export default  connectDB