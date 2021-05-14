import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'

import { updateCategories } from '../../actions/categories.js'

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
        const { destination, source } = result

        if (!destination) {
            return
        }

        const newCategories = Array.from(this.state.categories)

        if (destination.index !== source.index) {
            const removedObject = newCategories.splice(source.index, 1)
            newCategories.splice(destination.index, 0, removedObject[0])
            this.setState({
                categories: newCategories
            })
        }

        const categoriesForUpdate = newCategories.reduce(function(filtered, cat, i) {
            if (cat.position !== i + 1) {
                filtered.push({
                    ...cat,
                    position: i + 1
                })
            }
            return filtered
        }, [])
        
        if (categoriesForUpdate.length > 0) {
            this.props.updateCategories(categoriesForUpdate)
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

export default connect(null, { updateCategories })(EditCategories)