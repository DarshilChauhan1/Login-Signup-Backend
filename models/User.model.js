const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    username : {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true
    },
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;