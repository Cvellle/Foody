import React from 'react'
import {Link} from 'react-router-dom'
import './css/header.css'
import logimg from '../images/login.jpg';

const Welcome = ({user, onSignOut})=> {

  return (
    <div className="loged">
      <span>Loged in as: <strong> {user.username} </strong> </span>
      <a href="javascript:;" onClick={onSignOut} className=""> Sign out</a>
      <Link to={'/mymeals'}>
        <span className="loged navL">My meals</span></Link>
    </div>
  )
}

class LoginForm extends React.Component {
 
  handleSignIn(e) {
    e.preventDefault()
    let name = this.refs.username.value
    let pass = this.refs.password.value
    localStorage.setItem("username", name);
    localStorage.setItem("password", pass);
    
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    this.props.onSignIn(username, password);
  }
  
  render() {
    return (
      
      <div className="login">
        <div className="dropdown">
          <img ref="linkImg" src={logimg} className="loginImg navL dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/> 
          <div className="dropdown-menu border-0" aria-labelledby="dropdownMenuButton">
            <div href="#" class="loginForm">
              <form class="" onSubmit={this.handleSignIn.bind(this)}>
                <input  class="d-block mx-auto txt" type="text" ref="username" placeholder="enter you username" value="user"/>
                <input  class="d-block mx-auto txt" type="password" ref="password" placeholder="enter password" value="dummy"/>
                <input type="submit" value="Login" class="d-block float-right log"/>
              </form>  
            </div>
          </div>
        </div>
      </div>
      
    )
  }

}


class Login extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password")
      }
    }
  }
  
  componentDidMount() {
    if (!localStorage.getItem("username")) {
      this.setState({
        user: null
      })
    }
  }

  signIn(username, password) {

    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    this.setState({user: null});
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
  
  render() {
    return (
      <div>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginForm 
             onSignIn={this.signIn.bind(this)} 
            />
        }
      </div>
    )
    
  }
  
}



export default Login
