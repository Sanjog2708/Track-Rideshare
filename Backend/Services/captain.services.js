import captainModel from "../Models/captain.model.js"
import {ApiError} from "../Utils/ErrorResponce.js"

const createCaptain = async ({firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{

    console.log(firstname,lastname,email,password,color,plate,capacity,vehicleType);
    if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new ApiError(401,"All fields are required")
    }
    
    const existedCaptain = await captainModel.findOne({
        $or:[{firstname},{email}]
    })


    if(existedCaptain) {
        throw new ApiError(401,"User with firstname or password already exists");
    }

    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        }
    })

    return captain;
}

export {createCaptain}