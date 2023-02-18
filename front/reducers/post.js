

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
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}
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
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
};

export default reducer;