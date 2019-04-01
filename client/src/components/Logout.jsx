import React, { Component } from "react"
import axios from "axios"
import 'bulma/css/bulma.css';

class Logout extends Component{
    
    constructor(){
        super()
        this.state = {
            status: "",
        }
        
    }


    handleSubmit = (event) => {
        
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3001/logout',
            data: this.state,
            withCredentials: true
        })
        .then(result=>{
            this.props.loggedIn()
            this.setState({status: result.data})
            this.props.history.push("/")
        })
    }
   
    render(){
        return(
            <div class="field button is-big is-danger">
                <h1>Are you sure do you want to log Out? then click here  </h1>
                <input  onClick= {this.handleSubmit} type="submit" name="Logout" className="logout" value="log out"/>
            </div>
        )
        }
    }

export default Logout