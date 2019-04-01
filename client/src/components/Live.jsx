import React, {Component}from "react"
import axios from "axios"
import Competition from "./Competition";
import Bets from "./Bets"
import Table from "./Table"
import TopScorers from "./Topscorers"
import Loader from "./Loader";
import NextMatches from "./Nextmatches"
import News from "./News"

class Live extends Component{

    constructor(){
        super()
    this.state={
        bets: [],
        standings:[],
        pastMatches:[],
        topScorers: [],
        nextMatches:[],
        news: [],
        isLoading: true,
        intervalId:""

    }

}
 componentDidMount() {
           axios({
            method: 'get',
            url: 'http://localhost:3001/competition',
            withCredentials: true
    }).then(result=>{

        this.setState({
            bets:result.data[5].bets, 
            pastMatches: result.data[3].matches,
            standings: result.data[0].standings.standings[0].table,
            topScorers: result.data[1].topScores.scorers,
            nextMatches: result.data[6].nextGames.matches,
            news: result.data[2].news.articles,
            isLoading:false,
            
        })
    // })
   
}).catch(err =>{
    console.log(err)
})
        // init()
        const intervalId = setInterval(() => axios({
            method: 'get',
                url: 'http://localhost:3001/competition',
                withCredentials: true
        }).then(result=>{

            this.setState({
                bets:result.data[5].bets, 
                pastMatches: result.data[3].matches,
                standings: result.data[0].standings.standings[0].table,
                topScorers: result.data[1].topScores.scorers,
                nextMatches: result.data[6].nextGames.matches,
                news: result.data[2].news.articles,
                isLoading:false,
                
            })
        // })
       
    }).catch(err =>{
        console.log(err)
    }), 20000);
        this.setState({intervalId:intervalId});
    }

    componentWillUnmount () {
        clearInterval(this.state.clearInterval);
    }

    // getData = () =>{
    
    // }

    render(){
        console.log(this.state.standings)
        return(

            
            <div >
               { this.state.isLoading && <Loader /> }

                <div className="columns">
                 
         
         {!this.state.isLoading && 
         
             <table className="table is-bordered is-striped is-narrow is-hoverable is-halfwidth">
             
             <thead>

                 <tr>
                 <th><abbr title="Position">Pos</abbr></th>
                 <th>Team</th>
                 <th><abbr title="Played">Pld</abbr></th>
                 <th><abbr title="Won">W</abbr></th>
                 <th><abbr title="Drawn">D</abbr></th>
                 <th><abbr title="Lost">L</abbr></th>
                 <th><abbr title="Goals for">GF</abbr></th>
                 <th><abbr title="Goals against">GA</abbr></th>
                 <th><abbr title="Goal difference">GD</abbr></th>
                 <th><abbr title="Points">Pts</abbr></th>
                 </tr>

             </thead>
             <tbody>
              

                     {this.state.standings.map(table=>
                         <Table table={table}/>
                     )}           
             </tbody>
         </table>}
         
         <div class="column scroll" >
                <h1>ODDS</h1>
                       {this.state.bets.map((bet)=> {                        
                       return <Bets bets={bet}/>
                       })}
                </div>
                </div>

        <div class="columns">

            

                <div class="column scroll">
                <h1>NEXT FIXTURES</h1>
                {this.state.nextMatches.map(match => 
                    <NextMatches match={match} />
                )}
                </div>
                <div class="column scroll">
                <h1>TOP SCORERS</h1>
                {this.state.topScorers.map(scorers=>
                    <TopScorers  topScorers={scorers} />
                )}
                </div>
                
                
                <div class="column scroll">
                <h1>PAST MATCHES</h1>
                {this.state.pastMatches.map(match => 
                    <Competition match={match} />
                )}
                </div>
                <div class="column scroll">
                <h1>NEWS</h1>
                {this.state.news.map(article => 
                    <News articles={article} />
                )}
                </div>
                
                
                 
            </div>
            </div>
            
        )
    }
}

export default Live