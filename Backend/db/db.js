import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const connectDB = async ()=> {
    try{
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("MongoDB Connected !!");
    }
    catch(err){
        console.log("Unable to connect to the database ,",err.message);
    }
}
export default connectDB;