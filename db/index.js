const mongoose = require('mongoose');


const connectDB = async()=>{
    try {
       const mongooseconnect = await mongoose.connect("mongodb://127.0.0.1:27017/loginsignup");
       console.log("MONGODB CONNECTED SUCESSFULLY!");
       console.log(`${mongooseconnect.connection.host} ${mongooseconnect.connection.name}`); 
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR" , error);
    }
}

module.exports = connectDB;