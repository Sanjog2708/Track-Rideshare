import dotenv from "dotenv"
dotenv.config();

import http from "http"
import app from "./app.js"
import connectDB from "./Db/db.js"

connectDB();

const port =  process.env.PORT || 3000 ;

const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Server is running on port no : ${port}`);
});
  