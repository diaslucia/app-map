import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import placeReducer from "./reducer/placeReducer";

const rootReducer = combineReducers({
    places: placeReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));