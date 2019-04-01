import React, { Component } from "react"
import axios from "axios"

class Signup extends Component {

    constructor(props){
      super(props)
      this.state = {
        name: "",
        email: "",
        password:"",
        pswrepeat: "",
        status:"",
        session: "",
        errorMessage:""
      }
    }

    handlerClick = (event) =>{
        
      var inputField = {}
      inputField[event.target.name] = event.target.value;
      this.setState(inputField)
    }

    handleSubmit = (event) => {
        
        var newUser = this.state
       
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3001/signup',
            data: newUser,
            withCredentials: true
        }).then(result => {
           debugger
            // if(result.data.email === "" || result.data.password === "" || result.data === "need a passwords of at least 8 characters " ){
            //     if(result.data){
            //         this.setState({status: result.data})
            //     }
            //     else {
            //         this.setState({status: "fill in your email or password to sign up"})
            //         this.setState({password: "", pswrepeat: ""})
            //     }  
            // }
             /*else*/ if(this.state.password !== this.state.pswrepeat){
                 this.setState({status: "Password does not match",password: "", pswrepeat: ""})
             }
            // else if(result.data === "already exist"){
            //     this.setState({status: "email in use already, try a new one"})
            //     this.setState({password: "", pswrepeat: ""})
            // }
            
            
            else {
                debugger
                this.props.loggedIn()
                this.setState({status: "registered", password: "", pswrepeat: "" ,session: "active"})
                this.props.history.push("/")
            
            }
            
            
        }).catch(err => {
        console.log("error error" + err)
        debugger
        this.setState({errorMessage:err, password: "", pswrepeat: ""})
        
        })
    }

  
    render() {
        return (

            <form class="box column is-half" onSubmit={this.handleSubmit}>
            <h1><strong>REGISTRATION FORM!</strong></h1>
                <input class="input " onChange= {this.handlerClick} type="text" name="name" autoComplete="name" placeholder="name" value={this.state.name} />
                <input class="input " onChange= {this.handlerClick} type="email" name="email" autoComplete="email" placeholder="email" value={this.state.email} />
                <input class="input " onChange= {this.handlerClick} type="password" name="password" autoComplete="new-password" placeholder="password" value={this.state.password} required/>
                <input class="input " onChange= {this.handlerClick} type="password" name="pswrepeat" placeholder="Repeat Password" value={this.state.pswrepeat} required></input>
                <p>{this.state.errorMessage}</p>
                <button class="button is-success" type="submit" value="submit" > register </button>
                <h1>{this.state.status}</h1>
            </form>

        
        );
    }
}

export default Signup;