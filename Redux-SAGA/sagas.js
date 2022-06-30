import axios from 'axios';
import {call,put,takeEvery} from 'redux-saga/effects';
import { GET_IMAGES_FETCH,GET_IMAGES_SUCCESS } from './actions';


function imagesFetch(){
    return axios.get('https://picsum.photos/v2/list');
}
function* workGetUsersFetch(){
    const response = yield call(imagesFetch);
    yield put({
        type:GET_IMAGES_SUCCESS,
        payload:response.data,
    });
}

function* mySaga(){
    yield takeEvery(GET_IMAGES_FETCH,workGetUsersFetch);
}
export default mySaga;