import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import vacations from './vacations';
import user from './auth';

const reducer = combineReducers({ vacations,
  user });

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
