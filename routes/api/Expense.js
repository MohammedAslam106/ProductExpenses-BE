
const Expense=require('../../schemas/Expense')

const express=require('express')
const routes=express.Router()


const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

routes.get('/', async(req,res)=>{
    try{
        const expense= await Expense.find({user:req.user.id}).populate('categories')
        res.json(expense)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.get('/:id', async(req,res)=>{
    try{
        const expense= await Expense.findOne({user:req.user.id,_id:req.params.id}).populate('categories')
        res.json(expense)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.post('/', async(req,res)=>{
    try{
        const expense= await Expense.create({...req.body,user:req.user.id})
        res.json(expense)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.patch('/:id', async(req,res)=>{
    try{
        const expense= await Expense.updateOne({
            _id:req.params.id
        },{$set:req.body},{runValidators:true})
        res.json(expense)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

routes.delete('/:id', async(req,res)=>{
    try{
        const expense= await Expense.deleteOne(
            {
                _id:req.params.id
            }
        )
        res.json(expense)
    }catch (error){
        res.status(400).json({message:error.message || error})
    }
})

module.exports=routes
