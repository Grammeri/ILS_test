// We can use Redux Toolkit for generating actions and reducers
import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
    name: "route",
    initialState: {
        routes: [],
        selectedRoute: null,
        error: null,
    },
    reducers: {
        setRoutes: (state, action) => {
            state.routes = action.payload;
        },
        selectRoute: (state, action) => {
            state.selectedRoute = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// Export actions
export const { setRoutes, selectRoute, setError } = routeSlice.actions;

// Export reducer
export default routeSlice.reducer;
