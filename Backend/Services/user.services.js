import userModel from "../Models/user.model.js"
import {ApiResponce} from "../utils/ApiResponce.js"
import {ApiError} from "../Utils/ErrorResponce.js"

const createUser = async({firstname,lastname,email,password})=>{
    if(!firstname || !email || !password){
        throw new ApiError(400,"All fields are required");
    }

    const existedUser = await userModel.findOne({
        $or:[{firstname},{email}]
    })

    //Why it is not giving in the postman format
    if(existedUser) {
        throw new ApiError(409,"User with email or username already exists")
    }

    const user = await userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    })

    return user;
}

export {createUser}