const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please enter fullname'],
        minlength: [2, "fullname should include minimum 2 charecters"]
    },
    phone: {
        type: String,
        required: [true, 'please enter phone'],
        unique: [true, "number already exists"]
    },
    programme: {
        type: String,
        required: [true, 'please select programme'],
    },
    password: {
        type: String,
        required: [true, 'please enter password'],
    },
    email: {
        type: String,
        required: [true, 'please enter phone'],
        unique: [true, "email already exists"]
    },
    state: {
        type: String,
        required: [true, 'please select state'],
     
    },
    city: {
        type: String,
        required: [true, 'please select city'],
     
    }

});
const User = mongoose.model('User',userSchema);
module.exports = User;