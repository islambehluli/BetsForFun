import React from "react"

const TopScorers = ({topScorers}) =>{

    return(
        <div className="box is-half ">
            <p><a href={`https://www.premierleague.com/players`} target="_blank"><strong>{topScorers.player.name}</strong></a></p>
            <p>Goals: <strong>{topScorers.numberOfGoals}</strong></p>
        </div>
    )

}
 
export default TopScorers
