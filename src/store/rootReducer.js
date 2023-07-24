import { combineReducers } from "@reduxjs/toolkit";
// Assume we have route reducer
import routeReducer from './routeSlice';

const rootReducer = combineReducers({
    route: routeReducer,
});

export default rootReducer;
