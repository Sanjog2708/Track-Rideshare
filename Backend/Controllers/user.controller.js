import userModel from "../Models/user.model.js"
import {ApiResponce} from "../utils/ApiResponce.js"
import {ApiError} from "../Utils/ErrorResponce.js"
import {createUser} from "../Services/user.services.js"
import { validationResult } from "express-validator"

const registerUser = async (req,res,next)=>{
    // const errors = validationResult(req);
    const {firstname,lastname,email,password } = req.body;
    console.log(firstname,lastname,email,password)
    // if(!errors.isEmpty()) {
    //     throw new ApiError(401,"Please fill the valid data");
    // }


    const user = await createUser(firstname,lastname,email,password);

    const createdUser = await userModel.findById(user._id).select("-socketId -password");

    if(!createdUser) {
        throw new ApiError(500,"Something went wrong while creating the user"); 
    }

    const token = await user.generateRefreshToken();
    next();
    return res.status(201).json(
        new ApiResponce(200,{createdUser,token},"User register Successfully")
    )
}  

const loginUser = async (req,res,next)=>{
    const { email, password} = req.body;
    const user = await userModel.findOne({email}).select("-socketId");
    
    if(!user) {
        return res.status(401).json(
            new ApiError(401,{},"Invalid email or password"))
    }
    const isMatch = user.isPasswordCorrect(password);

    if(!isMatch) {
        return res.status(401).json(
            new ApiError(401,{},"Invalid email or password"))
    }

    next();

    const token = await user.generateRefreshToken();

    res.cookie("token",token,{
        httpOnly:false,
        secure:true,
    });
    

    return res.status(201).json(
        new ApiResponce(200,{user,token},"User login Successfully")
    )

}

const getUserProfile = async (req,res,next)=>{
    const user = req.user
    return res.status(201).json(
        new ApiResponce(200,{user},"User details fetch Successfully")
    )
}



export {registerUser,loginUser,getUserProfile}