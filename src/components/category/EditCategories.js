import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import EditCategory from './EditCategory.js'

class EditCategories extends Component {
    constructor(props){
        super(props)

        this.state = {
            categories: props.categories.sort((a,b) => {
                return (a.position < b.position) ? -1: 1
            })
        }
    }

    onDragEnd = result => {
        console.log(result)

        const { destination, source } = result

        if (!destination) {
            return
        }

        if (destination.index !== source.index) {
            console.log("moved")
            const newCategories = Array.from(this.state.categories)
            console.log(this.state.categories)
            const removedObject = newCategories.splice(source.index, 1)
            console.log(removedObject)
            newCategories.splice(destination.index, 0, removedObject[0])
            console.log(newCategories)
            this.setState({
                categories: newCategories
            })
        }
    }

    render(){
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="categories">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {this.state.categories.map((cat, i) => {
                                return <EditCategory key={cat.id} category={cat} index={i}/>
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default EditCategories