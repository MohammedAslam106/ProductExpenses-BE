const Category=require('../../schemas/Category')

const express=require('express')
const routes=express.Router()


const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

routes.get('/', async (req,res)=>{
    try{
        const categories= await Category.find({user:req.user.id})
        res.json(categories)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.get('/:id',async (req,res)=>{
    try{
        const category= await Category.findOne({user:req.user.id,_id:req.params.id})
        res.json(category)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.post('/', async (req,res)=>{
    try{
        const categories= await Category.create({...req.body,user:req.user.id})
        res.json(categories)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.patch('/:id', async (req,res)=>{
    try{
        const category= await Category.updateOne({
            _id:req.params.id
        },{$set:req.body},{runValidators:true})
        res.json(category)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.delete('/:id', async (req,res)=>{
    try{
        const categories= await Category.deleteOne(
            {
                _id:req.params.id
            }
        )
        res.json(categories)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

module.exports=routes