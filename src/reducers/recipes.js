const recipes = (state = [], action) => {
    switch(action.type) {
        case "SET_RECIPES":
            return action.recipes
        case "UPDATE_CATEGORY":
            const index = state.findIndex(cat => cat.id === action.category.id)
            return [...state.slice(0, index), action.category, ...state.slice(index+1)]
        default:
            return state
    }
}

export default recipes