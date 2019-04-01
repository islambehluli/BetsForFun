var express = require('express');
var router = express.Router();
const userSchema = require("../Models/userSchema")
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bcrypt = require("bcrypt");

router.post("/signin", (req, res) => {
    var email = req.body.email
    var password = req.body.password
    
    userSchema.findOne({ "email": email })
    .then(user => {
        if (!user) {
            res.status(401).json({errorMessage:"user not found"})
        }
        else
            {
                if (bcrypt.compareSync(password, user.password)) {
                // Save the login in the session!
                    req.session.user = user;
                    res.status(200).json(user)
                }   
                else 
                {
                    res.status(401).json({errorMessage:"user exist!"})
                }
            }
    })
    .catch(error => {
            next(error);
    })
})
    


module.exports = router