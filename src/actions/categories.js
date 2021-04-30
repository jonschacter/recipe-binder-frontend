import API_ROOT from '../apiRoot.js'

export const getCategories = () => {
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
                    console.log(data)
                }
            })
            .catch(error => alert(error))
    }
}