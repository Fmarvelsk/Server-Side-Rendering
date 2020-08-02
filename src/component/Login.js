import React, { Component } from 'react'

class Login extends Component{
    state = {
        username: '',
        password: ''
    }
    enterUser = (e)=>{
        this.setState(
             [e.target.value]
        )
    }
inputForm = (e) => {
    e.preventDefault()
    this.props.validate({
        username : this.state.value,
        password :  this.state.value
    })
    this.setState({
        username : '',
        password : ''
    })

}
    render(){
       
        return(
            <div>
            <form className="form-control" onSubmit={this.inputForm} >
            <input text="text" value={this.state.username} onChange= {this.enterUser}/>Input
            
            </form>
            </div>
        )
    }

}
export default Login;