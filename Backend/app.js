import express from "express"
import cors from "cors"
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))


app.get('/',(req,res)=>{
    console.log("Bol Bhai");
    res.status(201).json({"Hello" : "Sanjog"})
})


export default app;