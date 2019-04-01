import React from "react"

const News = ({articles}) =>{

    return(
        <div className="box is-half ">
                <img src={articles.urlToImage} alt="image of the news"/>
                <p><a href={articles.url} target="_blank"><strong>{articles.title}</strong></a></p>
        </div>
    )

}
 
export default News