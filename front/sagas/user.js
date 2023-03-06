import { all, fork, take, call, put, takeLatest, throttle, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user'


function logInAPI(data) {
    return axios.post('/api/login', data);
}

// const l = logIn({ type: 'LOG_IN_REQUEST', data: { id: 'learomero137@gmail.com'}})
// l.next();

function* logIn(action) {
    try {
        console.log("saga login");
        // const result = yield call(logInAPI, action.data);
        // call은 동기라서 결과를 기다리고 다음을 진행하지만, fork는 비동기로 결과를 기다리지 않고 바로 다음으로 넘어간다.
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
            //data: result.data
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}


function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        // call은 동기라서 결과를 기다리고 다음을 진행하지만, fork는 비동기로 결과를 기다리지 않고 바로 다음으로 넘어간다.
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}


function SignUpAPI() {
    return axios.post('/api/logout');
}

function* SignUp() {
    try {
        // const result = yield call(SignUpAPI);
        // call은 동기라서 결과를 기다리고 다음을 진행하지만, fork는 비동기로 결과를 기다리지 않고 바로 다음으로 넘어간다.
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
    //take는 event listener 역할을 하지만 1회용 이라는 단점이 있음 ( 1회 사용 후 사라짐)
    // 그런 이유로 while(true) 혹은 taskEvery를 사용한다.
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}