// We can use Redux Toolkit for generating actions and reducers
import { createSlice, createAction } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
    name: "route",
    initialState: {
        routes: [
            {
                name: "Маршрут №1",
                waypoints: [
                    { location: [59.84660399, 30.29496392] },
                    { location: [59.82934196, 30.42423701] },
                    { location: [59.83567701, 30.38064206] },
                ],
            },
            {
                name: "Маршрут №2",
                waypoints: [
                    { location: [59.82934196, 30.42423701] },
                    { location: [59.82761295, 30.41705607] },
                    { location: [59.84660399, 30.29496392] },
                ],
            },
            {
                name: "Маршрут №3",
                waypoints: [
                    { location: [59.83567701, 30.38064206] },
                    { location: [59.84660399, 30.29496392] },
                    { location: [59.82761295, 30.41705607] },
                ],
            },
        ],
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

// Create and export fetchRouteSagaAction
export const fetchRouteSagaAction = createAction('ROUTE/FETCH');

// Export reducer
export default routeSlice.reducer;
