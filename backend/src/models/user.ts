import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    name:{
        type:String,


    },

    auth0Id: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required:true
    }
    ,
    addressLine1: {

        type: String,

    },
    city: {

        type: String

    },

    country: {

        type: String

    }

});

const User=mongoose.model("User",userSchema);
export default User;