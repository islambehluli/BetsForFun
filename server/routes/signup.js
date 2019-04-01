var express = require('express');
var router = express.Router();
const userSchema = require("../Models/userSchema")
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);

const bcrypt = require("bcrypt");
const bcryptSalt = 5;

router.post("/signup", (req, res) => {
    var password = req.body.password
    var pswrepeat = req.body.pswrepeat
    var email = req.body.email
    var name = req.body.name

    if(pswrepeat === password){
        
    userSchema.findOne({ "email": email })
            .then(user => {
                if (user && user.email === email) {
                    res.status(409).json({errorMessage:"Email already exist"})
                }
                else {
                    
                    const salt = bcrypt.genSaltSync(bcryptSalt)
                    const hashPass = bcrypt.hashSync(password, salt)
                    // const hashpass2 = bcrypt.hashSync(pswrepeat, salt)
    
                    userSchema.create({
                        name,
                        email,
                        password: hashPass,
                        // pswrepeat: hashpass2
                    })
                        .then(user => {
                            debugger
                            req.session.user 
                            res.status(200).json(user)
                            
                        })
                        .catch(err => {
                            console.log(err)
                    })
                }
            })
        
    
    }
    else {
        if(password.length <= 7){
            res.status(400).json({errorMessage: "need a passwords of at least 8 characters "})
        }
        else res.status(400).json({errorMessage:"Invalid credentials"})
    }    
})

module.exports = router

    // router.get('/live-polling', (req,res)=> {
    //     LiveMatches.find().then(response)
    // })
    // .then(result4=> {
    //     LiveMatches.create({
    //         premier: result2.data.matches
    //     }

    //     )