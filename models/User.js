const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName : {
        type: "string" ,
        required: true,
    },
    lastName : {
        type: "string" ,
        required: true,
    },
    phoneNumber : {
        type: Number ,
        required: true,
    },
    email : {
        type: "string" ,
        required: true,
    },
    isUser : {
        type: Boolean ,
        required: true,
    },
    isAdmin : {
        type: Boolean ,
        required: false,
    },
    
}, 
 {timestamps: true}
);


module.exports =  Users = mongoose.model ("users", userSchema);
