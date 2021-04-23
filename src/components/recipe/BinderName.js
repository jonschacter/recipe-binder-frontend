import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { renameBinder } from '../../actions/currentUser.js'

class BinderName extends Component {
    constructor(props){
        super(props)

        this.state = {
            formToggle: false,
            binder_name: props.currentUser.binder_name
        }
    }
    
    toggleForm = () => {
        this.setState(prevState => ({
            formToggle: !prevState.formToggle
        }))
    }

    renderName = () => {
        const { binder_name } = this.props.currentUser
        
        return(
            <div className="binder-name">
                <h3>{ binder_name ? binder_name : <>MY BINDER</>}</h3>
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const userInfo = {
            ...this.props.currentUser,
            binder_name: this.state.binder_name
        }
        this.props.renameBinder(userInfo)
        this.toggleForm()
    }

    handleChange = (e) => {
        this.setState({
            binder_name: e.target.value
        })
    }

    renderForm = () => {
        return(
            <div className="binder-name-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.binder_name}></input>
                </form>
            </div>
        )
    }

    render(){
        return(
            <div className="binder-title">
                {this.state.formToggle ? this.renderForm() : this.renderName()}
                <Link onClick={this.toggleForm}>{ this.state.formToggle ? <>Cancel</> : <>Rename</> }</Link>
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, { renameBinder })(BinderName)