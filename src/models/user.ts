import mongoose from "mongoose";
import validator from "validator";


const schema = new mongoose.Schema({
    _id:{
        type: String,
        required: [true, "Please enter a ID"]
    },
    name:{
        type: String,
        required: [true, "Please enter a name"]
    },
    email:{
        type: String,
        unique:[true, "Email already exist"],
        required: [true, "Please enter a email"],
        validate: validator.isEmail,
    },
    photo:{
        type: String,
        required: [true, "Please add a photo"]
    },
    role:{
        type: String,
        enum: ["admin", "user"],
        default:"user",
    },
    gender:{
        type: String,
        enum: ["male", "female"],
        required:[true, "Please enter gender"]
    },
    dob:{
        type: Date,
        required:[true, "Please enter your birth date"]
    },
    
},
{
    timestamps:true,
});

export const  user = mongoose.model("User", schema)
