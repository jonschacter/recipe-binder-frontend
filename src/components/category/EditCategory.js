import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd'

import { deleteCategory } from '../../actions/categories.js'


class EditCategory extends Component {
    handleClick = ({target: { name, id }}) => {
        console.log(`clicked to delete ${name} - ${id}`)
        if (window.confirm(`Deleting '${name}' will also delete any associated recipes. Are you sure you want to proceed?`)) {
            console.log("user confirmed delete")
            this.props.deleteCategory(id)
        }
    }
    
    render(){
        const { category, index } = this.props
        return (
            <Draggable draggableId={"" + category.id} index={index}>
                {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <h3>{category.name}<button id={category.id} name={category.name} onClick={this.handleClick}>x</button></h3>
                    </div>
                )}
            </Draggable>
        )
    }
}

export default connect(null, { deleteCategory })(EditCategory)