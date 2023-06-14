import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import router from "./routes/userroutes.js";


const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);

mongoose.connect('mongodb+srv://Snehal:Snehal1234@mern-todo.va7rcii.mongodb.net/ExternalDB?retryWrites=true&w=majority')
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err,"db error"))
app.listen(8000,()=>console.log("working on PORT 8000"));