const User = require('../models/User.model.js');
const passportLocalMongoose = require('passport-local-mongoose');

const userControllersignUp = async(req,res)=>{
    try {
        const {username, email, password} = req.body;
        const newUser = new User({username, email})
        const registeredUser = await User.register(newUser,password);
        console.log(registeredUser);
        console.log("New User Created!", newUser);
    } catch (error) {
        console.log("ERROR IN CREATING NEW USER", error);
        res.status(500);
    }
}

const userControllerLogin = async(req,res)=>{
    console.log("Login Successfully")
}

module.exports = {userControllerLogin, userControllersignUp};
