import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Category from './Category.js'

class Categories extends Component {
    
    renderCategories = () => {
        return(
            this.props.categories.sort((a,b) => {
                return (a.position < b.position) ? -1: 1
            }).map(cat => {
                return <Category category={cat} />
            })
        )
    }
    
    render(){
        return(
            <div className="categories">
                <Link to={`/categories/edit`}>Edit Categories</Link>
                { this.renderCategories() }
            </div>
        )
    }
}

export default Categories