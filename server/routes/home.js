var express = require('express');
var router = express.Router();
var News = require("../Models/news")

router.post("/",(req,res)=>{
    
    News.find().sort({createdAt:-1}).limit(10)
    .then((response) => {
      console.log(response)
    res.status(200).json(response);
  })
  .catch(error => {
    console.log(error);
  });
})


module.exports = router
