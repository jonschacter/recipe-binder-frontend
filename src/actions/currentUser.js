import API_ROOT from '../apiRoot.js'

export const signup = (userInfo, history) => {
    return dispatch => {
        return fetch(`${API_ROOT}/signup`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: userInfo
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    // ADD STUFF HERE
                }
            })
            .catch(error => alert(error))
    }
}