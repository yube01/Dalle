import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import connectDatabse from "./mongoDb/connect.js";
import postRoutes from "./Routes/postRoutes.js"
import dalleRoutes from "./Routes/dalleRoutes.js"



dotenv.config();


const app = express();


app.use(cors());

app.use(express.json({limit:"50mb"}));


// middleware


app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes)

app.get("/",async(req,res)=>{
    res.send("Connected with AI")
})

const start = async()=>{
    try {
        connectDatabse(process.env.MONGODB_URL);
        app.listen(6660,()=>{
        console.log("Server Started")
        })

        
    } catch (error) {
        console.log(error)
        
    }


    app.listen(5550,()=>{
        console.log("Server Started")
    })
}

start()