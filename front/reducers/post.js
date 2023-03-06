

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'LEA',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0GjkxPGglWKYiNQyaZk_VEKPhFsAjUY57bw&usqp=CAU',
        }, {
            src: 'https://item.kakaocdn.net/do/49f9f0f4d4f24f6321023f14f967e5ddf43ad912ad8dd55b04db6a64cddaf76d',
        }, {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwwNvEFsSVNxYpUJbQ_HGh4XWLX_Hah1mNg&usqp=CAU',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 안녕하세요 첫번째 코멘트입니다.',
        },
        {
            User: {
                nickname: 'como',
            },
            content: '와아 집에 가고싶다 ㅜㅜ',
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = {
    id: 2,
    content: '더미데이터입니다',
    User: {
        id: 1,
        nickname: 'LEA',
    },
    Images: [],
    Comments: [],
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            }
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true,
            }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            }
        default:
            return state;
    }
};

export default reducer;