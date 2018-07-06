import { put, takeEvery } from 'redux-saga/effects';
import { MAP_ACTIONS } from '../actions/mapActions';
import { getData } from '../requests/mapRequests';

function* fetchData() {
    try {
        const mapData = yield getData();
        yield put({
            type: MAP_ACTIONS.SET_DATA,
            payload: mapData,
        });
        yield put({
            type: MAP_ACTIONS.SET_MILES_VIEW_DATA,
            payload: mapData,
        });
    } catch (error) {
        console.log('GET getLatLng error', error);
    }
}

function* mapSaga() {
    yield takeEvery(MAP_ACTIONS.GET_DATA, fetchData);
}

export default mapSaga;