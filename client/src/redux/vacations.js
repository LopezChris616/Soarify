import axios from "axios";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

let vacaAxios = axios.create();

vacaAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export const getVacations = () => {
    return dispatch => {
        return vacaAxios.get("/api/vacations").then(response => {
            dispatch({
                type: "GET_VACATIONS",
                vacations: response.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const addVacation = addedVacation => {
    return dispatch => {
        vacaAxios.post("/api/vacations", addedVacation).then(response => {
            dispatch(getVacations());
        }).catch(err => {
            console.log(err);
        })
    }
}

export const removeVacation = id => {
    return dispatch => {
        vacaAxios.delete(`/api/vacations/${id}`).then(response => {
            dispatch(getVacations());
        }).catch(err => {
            console.log(err);
        })
    }
}

export const editVacation = (id, editedVacation) => {
    return dispatch => {
        vacaAxios.put(`/api/vacations/${id}`, editedVacation).then(response => {
            dispatch(getVacations());
        }).catch(err => {
            console.log(err);
        })
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case "GET_VACATIONS":
            return action.vacations;
        case "LOGOUT":  
            return state; 
        default:
            return state;
    }
}

// const store = createStore(reducer, applyMiddleware(thunk));

export default reducer;