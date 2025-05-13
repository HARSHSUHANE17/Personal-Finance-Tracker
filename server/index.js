import express from 'express'
import mongoose from 'mongoose'
import financialRecordRouter from "./routes/financial-records.js"
import dotenv from 'dotenv';
import cors from "cors"

dotenv.config();



const app=express();
const port=process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

const mongoURI=process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(()=>console.log("Connected to MongoDB!"))
.catch((err)=>console.error("Failed to connect to MongoDB",err));


app.use("/financial-records",financialRecordRouter);


app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})