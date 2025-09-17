import mongoose, { Types } from "mongoose";
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
      type:String,
    required:true,
    unique:true
}, password:{
    type:string
},
 cartData:{
    type:Object,
    default:{}
 }
},{timestamps:true, 
    minimize:false
})

 const User = mongoose.Model("user", userSchema)
  export default User
