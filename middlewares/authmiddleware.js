import User from "../modals/register.js";
import encrpt from "encryptjs";

export const CheckPinRole=async(req,res,next)=>{
    try{
        const {_id,pin}=req.body;
        if(!_id) return res.send("ID is required in middleware.");
        if(!pin) return res.send("Pin is required in middleware.");
        // if(!role) return res.send("role is requiredin middleware.");

        const response=await User.find({_id}).exec();
        // console.log(response)
        if(!response.length) return res.send("User not found in middleware.");

        var secretpin="pin";
        var decipher=encrpt.decrypt(response[0].pin,secretpin,256);
        // console.log(response[0].role)
        if(decipher==pin){
            console.log("inside pin")
            if(response[0].role == "admin" || response[0].role=="seller"){
                // console.log("inside")
                next();
            }else{
                return res.send("You are not allowed to add product.")
            }
        }else{
            return res.send("Incorrect Pin");
        }

    }
    catch(error){
        return res.send(error)
    }
}