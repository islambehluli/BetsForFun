const axios = require("axios")
const News = require("./Models/news")


var pollNewsApiObject = {
        previous: [],
        pollNewsApi: function(){
            axios.get(`https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=8493f602f6ad40c9ab1397c7574864c5`, {
                headers: {'X-Auth-Token': "464f8f7e07d442c58eebab7ff1f8611d"},
            })
            .then((response) => {

                var newArticles = []
                loop1:
                for(let i = 0; i < response.data.articles.length; i++){
                    loop2:
                    for(let j = 0; j < pollNewsApiObject.previous.length; j++) {
                        if(pollNewsApiObject.previous[j].content == response.data.articles[i].content) continue loop1
                    }
                    newArticles.push(response.data.articles[i])
                }
                pollNewsApiObject.previous = response.data.articles
                News.insertMany(newArticles).then((results)=>{
                    console.log(`Inserted ${results.length} new articles`)
                })
                .catch(error =>{

                    console.log(error);
                })
            })
        }.bind(pollNewsApiObject),
        interValRef : undefined,
        startPolling: function(){
            News.find().then((results)=> {
                this.previous = results
                this.interValRef = setInterval(function(){this.pollNewsApi()}.bind(pollNewsApiObject), 60000)
            })
        },
        stopPolling: ()=> {
            clearInterval(interValRef)
        }
    }

    module.exports = pollNewsApiObject