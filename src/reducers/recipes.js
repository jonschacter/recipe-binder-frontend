const recipes = (state = [], action) => {
    switch(action.type) {
        case "SET_RECIPES":
            return action.recipes
        case "UPDATE_CATEGORY":
            const indexToUpdate = state.findIndex(cat => cat.id === action.category.id)
            return [...state.slice(0, indexToUpdate), action.category, ...state.slice(indexToUpdate+1)]
        case "REMOVE_CATEGORY":
            const indexToRemove = state.findIndex(cat => cat.id === action.categoryId)
            return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove+1)]
        default:
            return state
    }
}

export default recipes