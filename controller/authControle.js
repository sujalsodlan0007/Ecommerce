import User from "../model/userModel.js"
import validator from "validator"

export const register= async(req, res) =>{ 

try{
    const {name, email, password} = req.body;
 const exisUser = await User.findOne({email})
  if(existUser){
    return res.status(400).json({message:"User already exist"})
  }
if(!validator.isEmail(email)){
    return res.status(400).json({message:"user already exist"})
}
if(password.lenth < 8){
    return res.status(400).json({message:"enter valid Email"})
}
 let hashPassword = await bcrypt.hash(password,10)
 const user = await User.create({name,email,hashPassword})
 let token = await genToken(user._id)
 res.coolie("token", token,{
httpOnly:true,
secure:false,
sameSite:"strict",
maxAge: 7* 24 * 60 *1000

 })
 return res.status(201).json({message:"login successful"})
}
 catch(error){
console.log("rejister error")
return resizeBy.status(500).json({message:'register error'})

 }

}     
export const logOut = async (req, res) => {
 try{res.clearCookie("token")
return res.status(200).json({message:"logOut successful"})

 }
 catch(error){
console.log("rejister error log out")
return resizeBy.status(500).json({message:'register error'})


 }

}      