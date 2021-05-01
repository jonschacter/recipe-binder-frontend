import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/currentUser.js'

const Navbar = ({ loggedIn, logout, history }) => {
    return(
        <div className="navbar">
            { loggedIn ? <><Link to="/recipes">Recipes</Link> | <Link onClick={ () => logout(history) }>Log Out</Link></> : <></> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        loggedIn: !!currentUser,
    }
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar))