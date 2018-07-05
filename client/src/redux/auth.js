import axios from "axios";

export const signup = userInfo => {
    return dispatch => {
        axios.post("/auth/signup", userInfo).then(response => {
            const {token, user} = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authenticate(user));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const authenticate = user => {
    return {
        type: "AUTHENTICATE",
        user
    }
}

const initialState = {  
    username: "",
    isAuthenticated: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true
            }
        case "LOGOUT":  
            return initialState;
        default:
            return state;
    }
}

export const login = credentials => {
    return dispatch => {
        axios.post("/auth/login", credentials).then(response => {
            const {token, user} = response.data;
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authenticate(user));
            console.log(dispatch(authenticate(user)));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    return {
        type: "LOGOUT"
    }
}

export default reducer;