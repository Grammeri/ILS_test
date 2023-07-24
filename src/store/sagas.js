import { all, call, put, takeLatest } from "redux-saga/effects";
import { getRouteFromAPI } from "../services/osrmAPI";
import { selectRoute, setRoutes, setError } from "./actions";

// Worker Saga: will be fired on SELECT_ROUTE actions
function* fetchRoute(action) {
    try {
        const route = yield call(getRouteFromAPI, action.payload);
        yield put(setRoutes(route));
    } catch (e) {
        yield put(setError(e.message));
    }
}

/*
  Starts fetchRoute on each dispatched `SELECT_ROUTE` action.
  Allows concurrent fetches of route.
*/
function* mySaga() {
    yield all([takeLatest(selectRoute.type, fetchRoute)]);
}

export default mySaga;
