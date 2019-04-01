import React from "react"

const NextMatches = ({match}) => {
    return(
        <div className="box " >
           <h2 >
           <a href={`https://en.wikipedia.org/wiki/${match.homeTeam.name}`} target="_blank"><strong>{match.homeTeam.name}</strong></a> <strong><a href="https://www.totalsportek.com/category/football/" target="_blank"> <span className="box"> WATCH </span></a></strong> <a href={`https://en.wikipedia.org/wiki/${match.awayTeam.name}`}><strong>{match.awayTeam.name}</strong></a> 
           <br/>
           </h2></div>
       
    )
}

export default NextMatches
