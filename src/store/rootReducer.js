import { combineReducers } from "@reduxjs/toolkit";
// Assume we have route reducer
import routeReducer from './actions';

const rootReducer = combineReducers({
    route: routeReducer,
});

export default rootReducer;
