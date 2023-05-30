const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    created_at:{type:Date, default: ()=> new Date(), immutable: true},
    updated_at:{type:Date, default: ()=> new Date()}
})

const User=new mongoose.model("User", userSchema)

module.exports=User;
