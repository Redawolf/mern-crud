const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
})

const User = mongoose.model('User',UserSchema);

module.exports = User;

