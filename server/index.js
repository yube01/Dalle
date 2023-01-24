import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"

dotenv.config();


const app = express();


app.use(cors());

app.use(express.json({limit:"50mb"}));

app.get("/",async(req,res)=>{
    res.send("Connected with AI")
})

const start = async()=>{
    app.listen(5550,()=>{
        console.log("Server Started")
    })
}

start()