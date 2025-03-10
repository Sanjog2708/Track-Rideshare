import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const captainSchema = new mongoose.Schema(
    {
        fullname: {
            firstname: {
                type : String,
                required:true,
                minlength: [3,"first name should be atleast 3 characters long"],
            },
            lastname: {
                type:String,
                minlength:[3,"last name should be atleast 3 characters long"]
            }
        },
        email: {
            type : String,
            required:true,
            unique:true,
            lowercase:true,
        },
        password: {
            type:String,
            required:true,
        },
        socketId: {
            type:String,
        },
        status: {
            type:String,
            enum:['active','inactive'],
            default:'inactive',
        },
        vehicle: {
            color: {
                type:String,
                required:true,
                minlength:[3,"Color should be atleast 3 characters long"]
            },
            plate: {
                type:String,
                required:true,
                min:[4,"plate must be atleast 3 characters long"]
            },
            capacity: {
                type:Number,
                required:true,
                min:[1,'Capacity must be atleast 1']
            },
            vehicleType: {
                type:String,
                required:true,
                enum:['car','motorcycle','auto']
            }

        },
        location: {
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            }
        }
    },
    {
        timestamps:true
    }
);

captainSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

captainSchema.methods.isPasswordCorrect = async function(password){
    //It will return true or false
    return await bcrypt.compare(password,this.password);
}

captainSchema.methods.generateRefreshToken = async function(){
    return jwt.sign({ _id:this._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn : '24h'});
}

 const Captain = mongoose.model("Captain",captainSchema);
 export default Captain;