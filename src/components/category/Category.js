import React, { Component } from 'react'

class Category extends Component {
    render(){
        return(
            <h3>{this.props.category.name}</h3>
        )
    }
}

export default Category