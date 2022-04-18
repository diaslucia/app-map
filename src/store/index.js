import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middlewares = [thunk, logger];

/* Reducers */
import placeReducer from "./reducer/placeReducer";

const rootReducer = combineReducers({
    places: placeReducer
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));