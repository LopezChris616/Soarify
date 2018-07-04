import axios from "axios";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const getVacations = () => {
    return dispatch => {
        return axios.get("/vacations").then(response => {
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
        axios.post("/vacations", addedVacation).then(response => {
            dispatch(getVacations());
        }).catch(err => {
            console.log(err);
        })
    }
}

export const removeVacation = id => {
    return dispatch => {
        axios.delete(`/vacations/${id}`).then(response => {
            dispatch(getVacations());
        }).catch(err => {
            console.log(err);
        })
    }
}

export const editVacation = (id, editedVacation) => {
    return dispatch => {
        axios.put(`/vacations/${id}`, editedVacation).then(response => {
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
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;