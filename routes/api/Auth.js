const User=require('../../schemas/Users')

const express=require('express')
const routes=express.Router()

const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const privateKey="I don't know"

routes.post('/signup',async (req,res)=>{
    try{
        const data=req.body
        const hashPassword=bcrypt.hashSync(data.password,10)
        const user=await User.create({
            name:data.name,
            username:data.username,
            password:hashPassword
        })
        res.json(user)
    }
    catch(error){
        res.json({message:error.message||error})
    }
})
routes.post('/signin',async (req,res)=>{
    try{

        const data=req.body
        const reading=await User.findOne({username:data.username})
        if(!reading){
            res.status(401).json({error:'user not found'})
            return
        }
        const Match=bcrypt.compareSync(data.password,reading.password)
        if(!Match){
            res.status(403).json({error:'incorrect password'})
            return
        }
        const token=jwt.sign({name:reading.name,username:reading.username,id:reading._id},privateKey)
        res.json({message:token})
    }
    catch(error){
        res.json({message:error.message||message})
    }
})

module.exports=routes