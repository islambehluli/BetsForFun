import React from "react"
import 'bulma/css/bulma.css';



const Table = ({table}) =>{


    return(
        <tr className="background-table ">
            <th>{table.position}</th>
            <td><a href={`https://en.wikipedia.org/wiki/${table.team.name}`} target="_blank">{table.team.name}</a></td>
            <td>{table.playedGames}</td>
            <td>{table.won}</td>
            <td>{table.draw}</td>
            <td>{table.lost}</td>
            <td>{table.goalsFor}</td>
            <td>{table.goalsAgainst}</td>
            <td>{table.goalDifference}</td>
            <td>{table.points}</td>
        </tr>
    )
}

export default Table

