import React, {Component} from 'react';
import fire from '../config/Fire'

class LoginRegister extends Component{

  constructor(props){
      super(props);
      this.state = {
          email: '',
          password: '',
          fireErrors: '',
          formTitle: 'Sign In',
          loginButton : true
      };
  }

  

  login = e => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        this.setState({fireErrors: error.message})
    });
}

    register = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
        this.setState({fireErrors: error.message})
    });
}

    getAction = action =>{
        if(action == 'register'){
            this.setState({formTitle: "Register new user", loginButton: false, fireErrors: ''});
        }
        else{
            this.setState({formTitle: "Sign In", loginButton: true, fireErrors: ''});
        }
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
  
  render(){


    let errorNotification = this.state.fireErrors ? 
    ( <div className="Error"> {this.state.fireErrors} </div> ) : null;
   
    let submitButton = this.state.loginButton ? (<input className="loginButton" type="submit" onClick={this.login} value="Sign In"></input>):
    (<input className="loginButton" type="submit" onClick={this.register }value="Register"></input>)

    let login_signup = this.state.loginButton ? (<button className="registerButton" onClick={() => this.getAction('register')}>Register</button>) :
    (<button className="registerButton" onClick={() => this.getAction('signin')}>Login</button>);



    return(
      <div id="background">

        <div className= "form_container">
        <div id= "title">
            {this.state.formTitle}
        </div>
        <div className="container">
            {errorNotification}
            <form>
           
            <input type="email" 
            value={this.state.email} 
            onChange= {this.handleChange} 
            name="email"
            placeholder="User">
            </input>
            
            <input type="password" 
            value= {this.state.password} 
            onChange={this.handleChange} 
            name="password" 
            placeholder="Password">
            </input>
            
           <div>
           {submitButton} 
           </div>
           
            
            </form>
            {login_signup}
            
        </div>
        
      </div>
      </div> 
    );
  }

}

export default LoginRegister;
