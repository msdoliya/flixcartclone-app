import mongoose from "mongoose";


const signupschema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: {
        type: String,
        required: true,
        unique: true,
    },
   email: {
    type: String,
    required: true,
    unique: true,
},
    password: String,
  phone: {
    type: Number,
    required: true,
    unique: true,
},
})


const signupmodal = mongoose.model('usersignupdata', signupschema)

export default signupmodal;