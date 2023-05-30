const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')

mongoose.connect('mongodb://0.0.0.0:27017/expense_tracker')


const apiRoutes=require('./routes/api/')  //This line is similar to importing the files


app.use(cors())
app.use(express.json())

app.use('/api',apiRoutes)


app.listen(3000,()=>{
    console.log('listening on port 3000')
})

