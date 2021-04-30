import React from 'react'
import { connect } from 'react-redux'

import EditCategories from './EditCategories.js'

const EditCategoriesContainer = ({ recipes }) => {
    return(
        <div className="edit-category-container">
            { recipes.length > 0 ? < EditCategories categories={ recipes } /> : <h3>LOADING...</h3> }
        </div>
    )
}

const mapStateToProps = ({ recipes }) => {
    return {
        recipes
    }
}

export default connect(mapStateToProps)(EditCategoriesContainer)