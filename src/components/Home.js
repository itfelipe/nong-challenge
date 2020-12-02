import React, {Component} from 'react';
import fire from '../config/Fire';

class Home extends Component {
    
    
    logout = () =>{
        fire.auth().signOut();
    }
    
    
    render(){
        return(
            <div>
                <h1>You are Welcome</h1>
           
            <button onClick={this.logout}>LogOut</button>
            </div>
        )
    }
}
export default Home;