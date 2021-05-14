import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

class EditCategory extends Component {
    handleClick = (e) => {
        console.log(`${e.target.name} - ${e.target.id}`)
        if (window.confirm('Deleting this category will also delete any associated recipes. Are you sure you want to proceed?')) {
            console.log("user confirmed delete")
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

export default EditCategory