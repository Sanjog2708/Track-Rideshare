import { createCaptain } from "../Services/captain.services.js"
import { ApiError } from "../Utils/ErrorResponce.js";
import {ApiResponce} from "../utils/ApiResponce.js"
import captainModel from "../Models/captain.model.js"
import BlacklistToken from "../Models/blacklistTokens.model.js";

const registerCaptain = async(req,res,next)=>{

    const {firstname,lastname,email,password,vehicle} = req.body;
    const captain = await createCaptain({
        firstname,
        lastname,
        email,
        password,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
 });

    if(!captain) {
        throw new ApiError(501,"Something went wrong while creating the captain");
    }
    const token = await captain.generateRefreshToken();
    next();
    res.status(201).json(
        new ApiResponce(201,{captain,token},"Captain Created Successfully")
    )

}

const loginCaptain = async(req,res,next)=>{
    const { email,password } = req.body

    const captain = await captainModel.findOne({email})

    if(!captain) {
        throw new ApiError(401,"Invalid email or password");
    }
    const isMatched = await captain.isPasswordCorrect(password);

    if(!isMatched) {
        throw new ApiError(401,"Invalid email or password");
    }

    const token = await captain.generateRefreshToken();
    
    res.cookie("token",token,{
        httpOnly:false,
        secure:true,
    });
    next();

    return res.status(201).json(
        new ApiResponce(200,{captain,token},"Captain login Successfully")
    )

}

const getCaptainProfile = async(req,res,next)=>{
    const captain = req.captain;
    next();
    return res.status(201).json(
        new ApiResponce(200,{captain},"Captain details fetch Successfully")
    )
}

const logoutCaptain = async(req,res,next)=>{
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    res.clearCookie("token");
    await BlacklistToken.create({token});
    return res.status(201).json(
        new ApiResponce(200,"Captain logout Successfully")
    )

}

export {registerCaptain,loginCaptain,getCaptainProfile,logoutCaptain}