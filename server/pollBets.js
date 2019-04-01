 const axios = require("axios")
const Bets = require("./Models/bets")


pollBetsApiObject={
    

    pollBetsApi: function(response){
            debugger
            
            Bets.deleteMany()
            .then(() => {
                debugger
                Bets.insertMany(response[0])
                
            })
                .catch(err => {
                    pollBetsApiObject.stopPollingBets()
                    throw err
        })   
            
    },
    interValRef : 0,
    startPollingBets: function(){
  
        this.interValRef = setInterval(function(){ 
            
            pollBetsApiObject.getData() }, 30000)
            console.log("database updated")
    
    },
    stopPollingBets: ()=> {
        clearInterval(pollBetsApiObject.interValRef)
    },

    getData: function() {
        debugger
        var axiosMock = new Promise(function(resolve, reject){
            
            var mockBets = {}
            
            mockBets.data = require("./bets.json")
            mockBets = mockBets.data
            resolve(mockBets)
        })
        Promise.all([axiosMock]).then(function(values) {
            debugger
            pollBetsApiObject.pollBetsApi(values)
        })

        //  axios.get('https://api.the-odds-api.com/v3/odds?sport=soccer_epl&region=uk&apiKey=3d97d556f7b4231b5ee157d2177c04b3').then(result => { 
        //     debugger
        //  pollBetsApiObject.pollBetsApi(result.data)
        // }).catch(err =>{
        //     debugger
        //     pollBetsApiObject.stopPollingBets()
        //     console.log(err)
        // })
    }
}


module.exports = pollBetsApiObject

