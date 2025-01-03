import user from '../models/usermodel.js';

export const create=async(req,res)=>{
    try{
        let userdata=new user(req.body);
        const {email}=userdata;
        const userExist=await user.findOne({email});
        if(userExist){
            return res.status(400).json({message:"user already exist"});
        }
        const saveduser= await userdata.save();
        res.status(201).json({saveduser});

    }
    catch(err){
        res.status(404).json({  error:"internal server error" });
        
    }
}


export const  fetch= async (req, res) => {
    try {
        const users = await user.find();
        if(users.length===0){
            return res.status(404).json({message:"No user found"});
        }
        res.status(200).json({users});
    } catch (error) {
        res.status(404).json({ error:"internal server error" });
    }
}
export const update= async (req, res) => {
    try{

        const id=req.params.id;
        const userexist=await user.findOne({_id:id});
        if(!userexist){
            return res.status(404).json({message:"user not found"});
        }
        const updateuser=await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateuser});

    }
    catch(err){
        res.status(500).json({ error:"internal server error" });
    }
}

export const deleteuser= async (req, res) => {
    try{
        const id=req.params.id;
        const userexist=await user.findOne({_id:id});
        if(!userexist){
            return res.status(404).json({message:"user not found"});
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:"user deleted successfully"});
    }
    catch(err){
        res.status(500).json({ error:"internal server error" });
    }
}
