import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { getRouteFromAPI } from '../services/osrmAPI';
import { fetchRouteSagaAction, setRoutes, setError } from './actions';

// Worker Saga: will be fired on FETCH_ROUTE_SAGA_ACTION actions
function* fetchRouteSaga(action) {
    try {
        const route = action.payload;
        const coordinates = route.waypoints.map((waypoint) => waypoint.location);
        const newCoordinates = yield call(getRouteFromAPI, coordinates);

        // Replace old polyline with new polyline from OSRM
        const newRoute = {
            ...route,
            polyline: newCoordinates,
        };

        // Find and replace route in routes array
        const routes = yield select((state) => state.route.routes);
        const newRoutes = routes.map((route) =>
            route.name === newRoute.name ? newRoute : route
        );
        yield put(setRoutes(newRoutes));
    } catch (e) {
        yield put(setError(e.message));
    }
}

function* rootSaga() {
    yield all([takeLatest(fetchRouteSagaAction.type, fetchRouteSaga)]);
}

export default rootSaga;
