import React from 'react'
import { connect } from 'react-redux'

import BinderName from './BinderName.js'
import Categories from '../category/Categories.js'

const RecipeBinder = ({ recipes }) => {
    return(
        <div className="recipe-binder">
            <BinderName />
            { recipes.length > 0 ? < Categories categories={recipes} /> : <h3>LOADING...</h3>}
        </div>
    )
}

const mapStateToProps = ({ recipes }) => {
    return {
        recipes
    }
}

export default connect(mapStateToProps)(RecipeBinder)