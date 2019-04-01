import React, {Component} from "react"

class Article extends Component{
    render(){
        return(
            <div className="box">
                <a href="http://www.youneedtopay.com/" target="_blank">
                <img src={this.props.image} alt="image of the news"/>
                <p><strong>{this.props.description}</strong></p>
                </a>
            </div>
        )
    }
}
export default Article
