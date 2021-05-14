import API_ROOT from '../apiRoot.js'

export const updateCategory = category => {
    return {
        type: "UPDATE_CATEGORY",
        category
    }
}

export const updateCategories = (categories) => {
    return dispatch => {
        return fetch(`${API_ROOT}/categories/reorder`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ categories: categories })

        })
            .then(resp => resp.json())
            .then(data => {
                data.forEach(cat => {
                    dispatch(updateCategory(cat))
                })
            })
            .catch(error => alert(error))
    }
}