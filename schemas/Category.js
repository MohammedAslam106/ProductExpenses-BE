const mongoose=require("mongoose")

const categorySchema=new mongoose.Schema({
    user:{type:mongoose.Types.ObjectId, ref: "User",required:true,},
    title:{type:String,unique:true, required:true,minLength:3, maxLength:20},
    description:{type:String, maxLength:100},
    created_at:{type:Date, default: ()=> new Date(), immutable: true},
    updated_at:{type:Date, default: ()=> new Date()}
    
})

const Category=new mongoose.model("Category", categorySchema)

module.exports=Category;