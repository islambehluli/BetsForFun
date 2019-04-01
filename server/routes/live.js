var express = require('express');
var router = express.Router();
const axios = require("axios");
const bets = require("../bets.json")

router.post("/live", (req,res)=>{
         res.status(200).json(bets)
})


module.exports = router