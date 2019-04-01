import React, { Component } from "react"
import axios from "axios"
import Article from "./Articles"

class Home extends Component{
    
    constructor(props){
        super(props)
        this.state={
            news:[]
        }
        this.fetchNews = this.fetchNews.bind(this)
        this.intervalRef = 0
    }

    
    componentDidMount() {
        this.fetchNews()
        this.pollNews()
    }

    componentWillUnmount(){
        this.clearPolling()
    }

    fetchNews = ()=> {
        
        console.log("poll poll")
        axios({
            method: 'post',
            url: 'http://localhost:3001/',
            data: this.state,
            withCredentials: true
        })
        .then(result=>{
            debugger
            this.setState({news: result.data})
        })
    }

    pollNews = ()=> {
        this.intervalRef = setInterval(this.fetchNews, 5000)
    }

    clearPolling = ()=>{
        clearInterval(this.intervalRef)
    }

    render(){
    
        const article = this.state.news.map((articles,i)=>
        
            
            <Article key={i} 
                title={articles.title} 
                description={articles.description}
                image={articles.urlToImage}
                content={articles.content}
            />
        )
        return(
            <div>{article}</div>
        )
    }
}
export default Home;