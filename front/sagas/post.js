import { all, fork, take, call, put, takeLatest, throttle, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../reducers/post'


function addPostAPI(data) {
    return axios.post('/api/post',data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        // call은 동기라서 결과를 기다리고 다음을 진행하지만, fork는 비동기로 결과를 기다리지 않고 바로 다음으로 넘어간다.
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            //data: result.data
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function addCommentAPI(data) {
    return axios.post('/api/post/${data.postId}/comment',data);
}

function* addComment(action) {
    try {
        // const result = yield call(addCommentAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            //data: result.data
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
    //yield throttle('ADD_POST_REQUEST', addPost, 10000);
    // throttle은 ddos공격 방지용으로 사용하기는 하지만 주로 백엔드 쪽에서 요청에 대한 중복 점검을 한다.
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}