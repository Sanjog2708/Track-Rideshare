import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
    {
        fullname: {
            firstname :{
                type:String,
                required:true,
                minlength:[3,"First Name Must be at least 3 characters"],
                trim:true,  
            },
            lastname:{
                type:String,
                minlength:[3,"First Name Must be at least 3 characters"],
                trim:true,
            }
        },
        email: {
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        password: {
            type:String,
            required:[true,"Password is required"],
            select:false,
        },
        socketId: {
            type:String,
        }
    },
    {
        timestamps:true
    }
)

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    //It will return true or false
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign({ _id:this._id},process.env.REFRESH_TOKEN_SECRET);
}

 const User = mongoose.model("User",userSchema);
 export default User;