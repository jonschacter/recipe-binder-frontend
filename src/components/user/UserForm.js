import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signup } from '../../actions/currentUser.js'
import { login } from '../../actions/currentUser.js'

class UserForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    
    handleSubmit = e => {
        e.preventDefault()
        
        if (this.props.match.path === "/signup") {
            this.props.signup(this.state, this.props.history)
        } else {
            this.props.login(this.state, this.props.history)
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
                <br />
                <label>Password:</label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                <br />
                <input type="submit" value={this.props.match.path === "/signup" ? "Sign Up" : "Log In"} />
            </form>
        )
    }
}

export default connect(null, { signup, login })(UserForm)