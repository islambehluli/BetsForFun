var express = require('express');
var router = express.Router();
var axios = require("axios");
const Bets = require("../Models/bets")

router.get('/competition', function(req, res) {
    // switch(req.data.competition){
    //       case "PL":

    //       break;  
    //       case "SA":
    //       break;
    //       case "BL1":
    //       break; 
    //       case "PD":
    //       break;
    // }

    var lastMatches = new Promise(function(resolve, reject) {
        
        axios.get(`https://api.football-data.org/v2/competitions/PL/matches?status=FINISHED`,
    {
        headers: {'X-Auth-Token': '464f8f7e07d442c58eebab7ff1f8611d'}
    })
    .then(matches=>{

        resolve(matches.data)
    })
    .catch(err=>{
    
        reject(err)
    })
 
});
    var news = new Promise((resolve, reject) => {
        axios.get(`https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=8493f602f6ad40c9ab1397c7574864c5`,
    {
        headers: {'X-Auth-Token': "464f8f7e07d442c58eebab7ff1f8611d"}
    })
    .then(result=>{

        resolve({news: result.data})
    })
    .catch(err=>{
    
        
        reject(err)
    })
   
});
var live = new Promise((resolve, reject) => {
    axios.get(`https://api.football-data.org/v2/competitions/PL/matches?status=IN_PLAY`,
{
    headers: {'X-Auth-Token': "464f8f7e07d442c58eebab7ff1f8611d"}
})
.then(result=>{

    resolve({live: result.data})
})
.catch(err=>{

    
    reject(err)
})
})
    var topScorers = new Promise((resolve, reject) =>{
        axios.get(`https://api.football-data.org/v2/competitions/PL/scorers`,
    {
        headers: {'X-Auth-Token': '464f8f7e07d442c58eebab7ff1f8611d'}
    })
    .then(result=>{
    
        resolve({topScores: result.data})
    })
    .catch(err=>{
    
        reject(err)
    })

});
    var standings = new Promise((resolve, reject) => {
        axios.get(`https://api.football-data.org//v2/competitions/PL/standings`,
    {
        headers: {'X-Auth-Token': '464f8f7e07d442c58eebab7ff1f8611d'}
    })
    .then(result=>{
    
        resolve({standings:result.data})
    })
    .catch(err=>{
    
        reject(err)
    })

});

var bets = new Promise((resolve, reject) => {
    Bets.find()
    .then(result=>{
       
        resolve({bets:result})
        })
        .catch(err=>{
    
        reject(err)
    })

});
var nextGames = new Promise((resolve, reject) => {
    axios.get(`https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED`,
{
    headers: {'X-Auth-Token': '464f8f7e07d442c58eebab7ff1f8611d'}
})
.then(result=>{

    resolve({nextGames:result.data})
})
.catch(err=>{

    reject(err)
})

});



Promise.all([standings,topScorers,news,lastMatches,live, bets, nextGames]).then(function(values) {

        res.status(200).json(values)
    }).catch(err => {
    
    })

})

module.exports = router
