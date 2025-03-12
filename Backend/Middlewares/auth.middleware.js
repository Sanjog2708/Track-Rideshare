import userModel from "../Models/user.model.js"
import captainModel from "../Models/captain.model.js"
import BlacklistTokenModel from "../Models/blacklistTokens.model.js"
import jwt from "jsonwebtoken"
import { ApiError } from "../Utils/ErrorResponce.js"

const authUser = async (req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json(
            new ApiError(401,{},"Unauthorized Access"))
    }

    const isBlacklisted =  await BlacklistTokenModel.findOne({token});
    
    if(isBlacklisted) {
        return res.status(401).json(
            new ApiError(401,{},"Unauthorized Access"))
    }
    try {
        const decodedToken = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
        const user = await userModel.findById(decodedToken._id);
        
        req.user = user;
        return next();
        
    } catch (error) {
        return res.status(401).json(
            new ApiError(401,{},"Unauthorized Access"))
    }
    

}

const authCaptain = async (req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json(
            new ApiError(401,{},"Unauthorized Access"))
    }

    const isBlacklisted =  await BlacklistTokenModel.findOne({token});
    
    if(isBlacklisted) {
        return res.status(401).json(
            new ApiError(401,"Unauthorized Access"))
    }

    try {
        const decodedToken = jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
        const captain = await captainModel.findById(decodedToken._id);
        req.captain = captain;
        return next();
        
    } catch (error) {
        return res.status(401).json(
            new ApiError(401,"Unauthorized Access"))
    }
    

}

export {authUser,authCaptain}