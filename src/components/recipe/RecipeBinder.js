import React from 'react'
import { connect } from 'react-redux'

const RecipeBinder = ({ user }) => {
    return(
        <div>
            { user.binder_name ? <h2>{user.binder_name}</h2> : <h2>MY BINDER</h2> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        user: currentUser
    }
}

export default connect(mapStateToProps)(RecipeBinder)