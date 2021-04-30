import React, { Component } from 'react'

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
                { this.renderCategories() }
            </div>
        )
    }
}

export default Categories