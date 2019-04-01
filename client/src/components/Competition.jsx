import React from "react"
import "./Competition.css"

const competition = ({match}) => {
    return(
        <div className="box " >
           <h2 >
           <a href={`https://en.wikipedia.org/wiki/${match.awayTeam.name}`} target="_blank">{match.awayTeam.name}</a> <strong><span>{match.score.fullTime.awayTeam}</span> - <span>{match.score.fullTime.homeTeam}</span></strong> <a href={`https://en.wikipedia.org/wiki/${match.homeTeam.name} `}>{match.homeTeam.name} </a>
           <br/>
           </h2></div>
       
    )
}

export default competition
