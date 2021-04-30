import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'

class EditCategory extends Component {
    render(){
        return (
            <Draggable draggableId={"" + this.props.category.id} index={this.props.index}>
                {(provided) => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <h3>{this.props.category.name}</h3>
                    </div>
                )}
                
            </Draggable>
        )
    }
}

export default EditCategory