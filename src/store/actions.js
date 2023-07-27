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
                polyline: {
                    coordinates: []
                }
            },
            {
                name: "Маршрут №2",
                waypoints: [
                    { location: [59.82934196, 30.42423701] },
                    { location: [59.82761295, 30.41705607] },
                    { location: [59.84660399, 30.29496392] },
                ],
                polyline: {
                    coordinates: []
                }
            },
            {
                name: "Маршрут №3",
                waypoints: [
                    { location: [59.83567701, 30.38064206] },
                    { location: [59.84660399, 30.29496392] },
                    { location: [59.82761295, 30.41705607] },
                ],
                polyline: {
                    coordinates: []
                }
            },
        ],
        selectedRoute: null,
        error: null,
        loading: false,
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
        startLoading: (state) => {
            state.loading = true;
        },
        finishLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { setRoutes, selectRoute, setError, startLoading, finishLoading } = routeSlice.actions;

export const fetchRouteSagaAction = createAction('ROUTE/FETCH');

export default routeSlice.reducer;
