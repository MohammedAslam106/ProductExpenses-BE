const express=require('express')

const authRouter=require("./Auth")
const verifyJwt=require('../../midlewares/Authentication')
const categoryRouter=require('./Catogeries')
const expenseRouter=require('./Expense')

const router=express.Router()
router.use('/auth',authRouter)
router.use(verifyJwt)
router.use('/expenses',expenseRouter)
router.use('/categories',categoryRouter)
module.exports=router