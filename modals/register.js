import mongoose from "mongoose";
import { Schema } from "mongoose";

const user=new Schema({
    role:String,
    pin:String,
    email:String,
    password:String,
    name:String
});

export default mongoose.model("User",user);