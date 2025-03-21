import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

import userRouter from "./Routes/user.routes.js";
app.use("/users",userRouter);

import captainRouter from "./Routes/captain.routes.js"
app.use("/captains",captainRouter);



export default app;