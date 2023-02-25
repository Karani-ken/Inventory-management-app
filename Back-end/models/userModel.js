const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{type:String, required:[true, 'please add your name']},
    email:{type:String, required:[true, 'please add your email'], unique:true},
    password:{type:String, required:[true, 'please add your password']},
    
})

module.export =mongoose.model('User', userSchema)