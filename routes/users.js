const express=required("express");
const router=express.router();

const User=require("../models/users");
router.post("/",async(req,res)=>{
    let userToBeCreated=new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
});
let userToBeCreated=await userToBeCreated.save();
return res.send({username:userToBeCreated.username,user:userToBeCreated.email})
