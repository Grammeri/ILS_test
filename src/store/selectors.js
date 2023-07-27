import { createSelector } from 'reselect';

const getRoutes = (state) => state.route.routes;

const getSelectedRoute = createSelector(
    getRoutes,
    (state) => state.route.selectedRoute,
    (routes, selectedRoute) =>
        routes.find((route) => route.name === selectedRoute?.name)
);

const getError = (state) => state.route.error;

export { getRoutes, getSelectedRoute, getError };

export const getLoadingStatus = (state) => state.route.loading;

