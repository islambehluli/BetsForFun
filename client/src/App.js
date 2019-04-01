import React, { Component } from 'react';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Logout from './components/Logout';
import Navbar from "./components/Navbar";
import Home from './components/Home';
import live from "./components/Live";
import Blog from "./components/Blog";
import { Switch, Route, Link } from 'react-router-dom';
import NavbarLoggedIn from './components/NavbarLoggedIn';

class App extends Component {
  state = {
    loggedIn: true
  }
  loggedIn = ()=>{
    this.setState({loggedIn: !this.state.loggedIn})
  }
  render() {
    console.log(sessionStorage)

    return (
      <div className="App ">
      <section className="hero is-fullheight is-primary is-bold">
       <div className="hero-head">
       {this.state.loggedIn ? <NavbarLoggedIn /> : <Navbar />}
       
       </div>
      
          <div className="hero-body is-fullheight">
          <div className="container flex-container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signin' render={(props)=> <Signin loggedIn={this.loggedIn} {...props} />}/>
            <Route path='/signup' render={(props)=> <Signup loggedIn={this.loggedIn} {...props} />}/>
            <Route path='/logout' render={(props)=> <Logout loggedIn={this.loggedIn} {...props} />}/>
            <Route path='/live'   component={live}/>
            <Route path='/blog'   component={Blog}/>
          </Switch>
          </div>
          </div>
          </section>
      </div>
    )
  }
}

export default App;
