import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { getRouteFromAPI } from '../services/osrmAPI';
import { fetchRouteSagaAction, setRoutes, setError, startLoading, finishLoading } from '../store/actions';
import polyline from "@mapbox/polyline"

function* fetchRouteSaga(action) {

    try {
        yield put(startLoading()); // Начало загрузки
        const route = action.payload;
        const coordinates = route.waypoints.map((waypoint) => waypoint.location);
        const newCoordinates = yield call(getRouteFromAPI, coordinates);
        console.log(newCoordinates);
        const decodedPolyline = polyline.decode(newCoordinates);

        const newRoute = {
            ...route,
            polyline: decodedPolyline,
        };

        const routes = yield select((state) => state.route.routes);
        const newRoutes = routes.map((route) =>
            route.name === newRoute.name ? newRoute : route
        );
        yield put(setRoutes(newRoutes));
    } catch (e) {
        yield put(setError(e.message));
    } finally {
        yield put(finishLoading()); // Завершение загрузки
    }

}

function* rootSaga() {
    yield all([takeLatest(fetchRouteSagaAction.type, fetchRouteSaga)]);
}

export default rootSaga;
