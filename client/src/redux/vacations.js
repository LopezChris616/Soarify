import axios from 'axios';

const vacaAxios = axios.create();

vacaAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const configuration = config;
  configuration.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getVacations = () => dispatch => vacaAxios.get('/api/vacations').then((response) => {
  dispatch({ type: 'GET_VACATIONS',
    vacations: response.data });
}).catch((err) => {
  console.log(err);
});

export const addVacation = addedVacation => (dispatch) => {
  vacaAxios.post('/api/vacations', addedVacation).then(() => {
    dispatch(getVacations());
  }).catch((err) => {
    console.log(err);
  });
};

export const removeVacation = id => (dispatch) => {
  vacaAxios.delete(`/api/vacations/${id}`).then(() => {
    dispatch(getVacations());
  }).catch((err) => {
    console.log(err);
  });
};

export const editVacation = (id, editedVacation) => (dispatch) => {
  vacaAxios.put(`/api/vacations/${id}`, editedVacation).then(() => {
    dispatch(getVacations());
  }).catch((err) => {
    console.log(err);
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_VACATIONS':
      return action.vacations;
    case 'LOGOUT':
      return state;
    default:
      return state;
  }
};

export default reducer;
