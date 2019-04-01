var express = require('express');
var router = express.Router();
var Bets = require("../Models/bets")

router.post("/bets",(req,res)=>{

    Bets.find()
    .then((response) => {
      console.log(response)
    res.status(200).json(response);
  })
  .catch(error => {
    console.log(error);
    res.json({message: error})
  });
})


module.exports = router