import React, { Component } from 'react'
import { connect } from 'react-redux'

class RecipeBinder extends Component {
    render(){
        const { user } = this.props
        let name

        if (user && user.binder_name) {
            name = user.binder_name
        } else {
            name = "My Binder"
        }
        
        return(
            <div className="recipe-binder">
                <h1>{name}</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
        user: currentUser
    }
}

export default connect(mapStateToProps)(RecipeBinder)