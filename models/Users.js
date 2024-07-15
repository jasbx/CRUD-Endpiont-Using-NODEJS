const mongoose = require('mongoose')
const Schema=mongoose.Schema;
const User=new Schema({
    username:{
        type:String,
      
    },
    
    email:{
        type:String,
        required:true
        
    },



})
const Users=mongoose.model('User',User)
module.exports=Users