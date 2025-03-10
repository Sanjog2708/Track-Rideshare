import { createCaptain } from "../Services/captain.services.js"
import { ApiError } from "../Utils/ErrorResponce.js";
import {ApiResponce} from "../utils/ApiResponce.js"

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

}

export {registerCaptain,loginCaptain}