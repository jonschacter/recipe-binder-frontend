import API_ROOT from '../apiRoot.js'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch(`${API_ROOT}/current_user`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(setCurrentUser(data))
                }
            })
            .catch(error => alert(error))
    }
}

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