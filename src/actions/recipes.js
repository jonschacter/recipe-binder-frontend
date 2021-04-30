import API_ROOT from '../apiRoot.js'

export const setRecipes = recipes => {
    return {
        type: "SET_RECIPES",
        recipes
    }
}

export const getRecipes = () => {
    return dispatch => {
        return fetch(`${API_ROOT}/categories`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(setRecipes(data))
                }
            })
            .catch(error => alert(error))
    }
}