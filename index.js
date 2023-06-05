const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()


mongoose.connect(`${process.env.MONGO_DB_SERVER}/expense_tracker`)


const apiRoutes=require('./routes/api/')  //This line is similar to importing the files


app.use(cors())
app.use(express.json())

app.use('/api',apiRoutes)


app.listen(process.env.PORT ?? 3000,()=>{
    console.log('listening on port 3000')
})

