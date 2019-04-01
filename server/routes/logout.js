var express = require('express');
var router = express.Router();
const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);

router.post("/logout", (req,res)=>{
    req.session.destroy()
    res.json("Logged out")
})
module.exports = router