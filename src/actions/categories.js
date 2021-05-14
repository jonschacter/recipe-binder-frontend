import API_ROOT from '../apiRoot.js'

export const updateCategory = category => {
    return {
        type: "UPDATE_CATEGORY",
        category
    }
}

export const removeCategory = categoryId => {
    return {
        type: "REMOVE_CATEGORY",
        categoryId
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

export const deleteCategory = (id) => {
    return dispatch => {
        return fetch(`${API_ROOT}/categories/${id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(removeCategory(id))
                    data.forEach(cat => {
                        dispatch(updateCategory(cat))
                    })
                } else {
                    alert(data.error)
                }
            })
            .catch(error => alert(error))
    }
}