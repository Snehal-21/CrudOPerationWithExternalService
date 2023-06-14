import User from "../modals/register.js";
import encrypt from "encryptjs";

export const register=async(req,res)=>{
    try{
        const{role,pin,email,password,name}=req.body;
        if(!role) return res.send("Role is required.");
        if(!pin) return res.send("Pin is required.");
        if(!email) return res.send("Email is required.");
        if(!password) return res.send("PAssword is required.");
        if(!name) return res.send("Name is required.");

        const response=await User.find({email}).exec();
        if(response.length) return res.send("You are already registered or this Email is in use");

        var secretpass="pass";
        var cipherpass=encrypt.encrypt(password,secretpass,256);

        var secretpin="pin";
        var cipherpin=encrypt.encrypt(pin,secretpin,256);

        const user=new User({
            role,
            pin:cipherpin,
            email,
            password:cipherpass,
            name
        });
        await user.save();
        return res.send("Registration successful!");
    }catch(error){
        return res.send(error);
    }
}

export const addproduct=async(req,res)=>{
    try{
        const{title,price,descripttion,image,category}=req.body;

        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify({
                title,
                price,
                descripttion,
                image,
                category
            })
        })
        .then(res=>res.json())
        .then((json)=>{
            console.log(json);
            res.send(json);
        })
    }catch(error){
        return res.send(error);
    }
}