const recipes = (state = [], action) => {
    switch(action.type) {
        case "SET_RECIPES":
            return action.recipes
        case "UPDATE_CATEGORY":
            const indexToUpdate = state.findIndex(cat => cat.id === action.category.id)
            return [...state.slice(0, indexToUpdate), action.category, ...state.slice(indexToUpdate+1)]
        case "REMOVE_CATEGORY":
            return state.filter(cat => cat.id !== parseInt(action.categoryId))
        default:
            return state
    }
}

export default recipes