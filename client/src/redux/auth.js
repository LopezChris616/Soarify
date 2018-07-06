import axios from "axios";

const vacaAxios = axios.create();  
vacaAxios.interceptors.request.use(config => {  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export const signup = userInfo => {
    return dispatch => {
        axios.post("/auth/signup", userInfo).then(response => {
            const {token, user} = response.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authenticate(user));
        }).catch(err => {
            console.log(err);
            dispatch(authError("signup", err.response.status));
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
    user: {
        username: "",
        _id: ""
    },
    authErrCode: {
        signup: "",
        login: ""
    },
    isAuthenticated: false,
    loading: true
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true,
                authErrCode: initialState.authErrCode,
                loading: false
            }
        case "LOGOUT":  
            return {
                ...initialState,
                loading: false
            }
        case "AUTH_ERROR":
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                },
                loading: false
            }
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
            console.log(response.data);
        }).catch(err => {
            console.log(err);
            dispatch(authError("login", err.response.status));
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

export const authError = (key, errCode) => {
    return {
        type: "AUTH_ERROR",
        key,
        errCode
    }
}

export const verify = () => {
    return dispatch => {
        vacaAxios.get("/api/vacations").then(response => {
            let {user} = response.data;
            dispatch(authenticate(user));
        }).catch(err => {
            dispatch(authError("verify", err.response.status));
        })
    }
}

export default reducer;