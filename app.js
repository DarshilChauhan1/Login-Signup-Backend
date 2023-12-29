require('dotenv').config({
    path : './.env'
})
const express = require('express');
const app = express();
const connectDB = require('./db/index.js');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const userRouter = require('./routes/User.route.js')
const passport = require('passport');
const User = require('./models/User.model.js');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`Server is connected to ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAILS", error);
})
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(session({
    secret : "MySuperScreat",
    resave : false,
    saveUninitialized : true,
    cookie :{
        httpOnly : true,
        maxAge : 24 * 60 * 60 * 1000,
        secure : true
    },
}))


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

app.use('/', userRouter);


