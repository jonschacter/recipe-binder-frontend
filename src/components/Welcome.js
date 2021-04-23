import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/currentUser.js'

const Welcome = ({ loggedIn, logout, history }) => {
    return (
        <div>
            <h2>Welcome</h2>
            { loggedIn ? <p><Link onClick={ () => logout(history) }>Log Out</Link></p> : <p>Please <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link>.</p>}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps, { logout })(Welcome)