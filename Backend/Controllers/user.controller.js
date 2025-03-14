import userModel from "../Models/user.model.js"
import BlacklistTokenModel from "../Models/blacklistTokens.model.js"
import {ApiResponce} from "../utils/ApiResponce.js"
import {ApiError} from "../Utils/ErrorResponce.js"
import {createUser} from "../Services/user.services.js"
import { validationResult } from "express-validator"


const registerUser = async (req,res)=>{
    // const errors = validationResult(req);
    const {fullname,email,password } = req.body;
    // if(!errors.isEmpty()) {
    //     throw new ApiError(401,"Please fill the valid data");
    // }

    const user = await createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password
    });

    const createdUser = await userModel.findById(user._id).select("-socketId -password");

    if(!createdUser) {
        throw new ApiError(500,"Something went wrong while creating the user"); 
    }

    const token = await user.generateRefreshToken();
   
    return res.status(201).json(
        new ApiResponce(200,{createdUser,token},"User register Successfully")
    )
}  

const loginUser = async (req,res)=>{
    const { email, password} = req.body;

    const user = await userModel.findOne({email}).select("-socketId");
    
    if(!user) {
        return res.status(401).json(
            new ApiError(401,{},"Invalid email or password"))
    }
    const isMatch = await user.isPasswordCorrect(password);

    if(!isMatch) {
        return res.status(401).json(
            new ApiError(401,{},"Invalid email or password"))
    }


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
    next();
    return res.status(201).json(
        new ApiResponce(200,{user},"User details fetch Successfully")
    )
}

const logoutUser = async (req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    res.clearCookie("token");
    await BlacklistTokenModel.create({token});
    return res.status(201).json(
        new ApiResponce(200,{},"User logout Successfully")
    )

}


export {registerUser,loginUser,getUserProfile,logoutUser}