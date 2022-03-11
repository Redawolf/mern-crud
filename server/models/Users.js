const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:True
    },
    description:{
        type:String,
        required:true
    }
    
})

const User = mongoose.model('User',UserSchema);

exports.model = User;

