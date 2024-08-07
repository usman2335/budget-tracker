const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {type :String, required: true, unique: false},
    lastName: {type :String, required: true, unique: false},
    email: {type :String, required: true, unique: true},
    password: {type :String, required: true, unique: false},
    budget: {type : Number, required: true, unique: false},

})

const User = mongoose.model('User',userSchema);
module.exports = User;