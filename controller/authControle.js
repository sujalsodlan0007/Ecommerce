import User from "../model/userModel.js"
import validator from "validator"
import bcrypt from "bcrypt"
import { genToken } from "../config/token.js"

export const registration = async(req, res) =>{ 

try{
    const {name, email, password} = req.body;
 const existUser = await User.findOne({email})
  if(existUser){
    return res.status(400).json({message:"User already exist"})
  }
if(!validator.isEmail(email)){
    return res.status(400).json({message:"user already exist"})
}
if(password.length < 8){
    return res.status(400).json({message:"enter valid Email"})
}
 let hashPassword = await bcrypt.hash(password, 10)
 const user = await User.create({name, email, password: hashPassword})
 let token = await genToken(user._id)
 res.cookie("token", token, {
httpOnly:true,
secure:false,
sameSite:"strict",
maxAge: 7* 24 * 60 *1000

 })
 return res.status(201).json(user)
}

 catch(error){
console.log("rejister error")
return res.status(500).json({message:'register error'})

 }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json(user);
    } catch (error) {
        console.log("login error");
        return res.status(500).json({ message: 'Login error' });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0)
        });
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("logout error");
        return res.status(500).json({ message: 'Logout error' });
    }
}