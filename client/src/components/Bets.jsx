import React from "react"

const Bets = ({bets}) =>{
return(
        <div className="bets ">
            <p className="box is-one-quarter has-text-primary ">
                <a href={`https://en.wikipedia.org/wiki/${bets.teams[0]}`} target="_blank">
                    <strong>{bets.teams[0]}</strong>
                </a> 
                <a href="https://toto.nederlandseloterij.nl/en/wedden/football/premier-league"  target="_blank"> 
                    <span   className="box change-color" >
                        <strong> {bets.sites[0].odds.h2h[0]}</strong> 
                    </span> 
                    <span  className="box change-color" >
                        <strong>{bets.sites[0].odds.h2h[2]}</strong> 
                    </span>
                    <span  className="box change-color" >
                        <strong>{bets.sites[0].odds.h2h[1]}</strong>
                        </span></a><a href={`https://en.wikipedia.org/wiki/${bets.teams[1]}`} target="_blank"><strong>{bets.teams[1]}</strong></a></p>
        </div>
        )

}

export default Bets