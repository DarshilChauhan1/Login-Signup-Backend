const express = require('express');
const { userControllersignUp, userControllerLogin } = require('../controllers/User.controller');
const router = express.Router();
const passport = require('passport');


router.post('/signup', userControllersignUp)

router. route('/login')
.post(passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true 
  }), userControllerLogin)


router.get('/',(req,res)=>{
    console.log("Router Working");
    res.send("All Things are working perfectly");
})

module.exports = router;
