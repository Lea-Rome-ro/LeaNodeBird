import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

//const initialState = {
//    user: {
//    },
//    post: {
//    }
//};


// async action creator


//action createor
//const changeNickname = (data) => {
//    return {
//        type: 'CHANGE_NICKNAME',
//        data,
//    }
//}

// chagneNickname('lealea');
// store.dispatch(changeNickname('mighty lea'))


// (이전상태, 액션) => 다음 상태
const rootReducer = combineReducers({
    index: (state={}, action)=> {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;