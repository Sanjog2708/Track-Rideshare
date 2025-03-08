import http from "http"
import app from "./app.js"
import dotenv from "dotenv"
import connectDB from "./Db/db.js"

dotenv.config();
connectDB();

const port =  process.env.PORT || 3000 ;

const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Server is running on port no : ${port}`);
});
  