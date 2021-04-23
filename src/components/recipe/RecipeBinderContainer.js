import React from 'react'
import { connect } from 'react-redux'

import RecipeBinder from './RecipeBinder.js'

const RecipeBinderContainer = ({ user }) => {
    return(
        <div className="recipe-binder-container">
            { user ? <RecipeBinder /> : <h3>LOADING...</h3> }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        user: currentUser
    }
}

export default connect(mapStateToProps)(RecipeBinderContainer)