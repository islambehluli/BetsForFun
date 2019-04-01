import React, { Component } from "react"
import axios from "axios"
import 'bulma/css/bulma.css';


class Signin extends Component{
    
    constructor(props){
        super(props)
        this.state = {
          email: "",
          password:"",
          status:"",
          errorMessage:"",
        }
    }
    handlerClick = (event) =>{
        
        var inputField = {}
        inputField[event.target.name] = event.target.value;
        this.setState(inputField)
    }

    handleSubmit = (event) => {
        
        var user = this.state
       
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3001/signin',
            data: user,
            withCredentials: true
        })
        .then(result => {
            this.props.loggedIn()
           this.setState({status: result.data})
           this.setState({password: ""})
           this.props.history.push("/")
        })
        .catch(err=>{
            this.setState({errorMessage:err.response.data.errorMessage})
        })
    }
    render(){
       
        return(
            <form class="box column is-half" onSubmit={this.handleSubmit}>
            <div class="field ">
            <label class="label">Email</label>
            <div class="control ">
            <input class="input " onChange= {this.handlerClick} autoComplete="username" type="email" name="email" placeholder="email" value={this.state.email} />
            </div>
          </div>
          
            <div class="field">
            <label class="label">password</label>
            <div class="control">
            <input class="input" onChange= {this.handlerClick} autoComplete="current-password" type="password" name="password" placeholder="password" value={this.state.password} />
            </div>
          </div>
          <button class="button is-small is-success" type="submit" value="submit">LOG IN</button>
        </form>



        )
    }

} 
export default Signin;
