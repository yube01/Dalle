import * as dotenv from 'dotenv';
import express from "express";
import { Configuration , OpenAIApi } from "openai";



dotenv.config();

const Router = express.Router();

export default Router