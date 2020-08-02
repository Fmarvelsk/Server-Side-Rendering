import React, { Component } from 'react';
import Login from './component/Login'
import Navbar from './component/Navbar';


class App extends Component{
    validateUser= (user) => {
       console.log(user) 
    }
    render(){
        return(
            <div>
            <Login validate={this.validateUser}/>
               <Navbar />
            </div>
        )
    }
}

export default App;