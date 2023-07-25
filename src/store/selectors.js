import { createSelector } from 'reselect';

// Селекторы получают данные из состояния

// Селектор для получения списка маршрутов
const getRoutes = (state) => state.route.routes;

// Селектор для получения выбранного маршрута
const getSelectedRoute = createSelector(
    getRoutes,
    (state) => state.route.selectedRoute,
    (routes, selectedRoute) =>
        routes.find((route) => route.name === selectedRoute?.name)
);

// Селектор для получения ошибок
const getError = (state) => state.route.error;

export { getRoutes, getSelectedRoute, getError };
