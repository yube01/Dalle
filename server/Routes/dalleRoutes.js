import * as dotenv from 'dotenv';
import express from "express";
import { v2 as cloudinary} from "cloudinary"


import Post from "../mongoDb/models/post.js"
import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const Router = express.Router();


const configuration = new Configuration(

   { apiKey: process.env.OPENAI_API_KEY,}
)


//new instances 
const openai = new OpenAIApi(configuration);


Router.route("/").get((req , res) =>{
    res.status(200).json({ message : "HEllo"})
})

Router.route("/").post(async(req, res)=>{
    try {

        // this value comes from frontend part
        const { prompt }= req.body;

        //getting image from api
        const aiResponse = await openai.createImage({
            prompt,
            n:1,
            size:"1024x1024",
            response_format:"b64_json",
          })

        const image = aiResponse.data.data[0].b64_json;

        //send image in frontend
        res.status(200).json({photo: image})
        
    } catch (error) {
        console.log(error)

        res.status(500).send(error?.response.data.error.message || 'Something went wrong')       
    }
})


export default Router
