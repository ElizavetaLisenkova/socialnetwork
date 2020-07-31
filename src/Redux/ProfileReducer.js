const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})


let ProfileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = { id: 3, mes: state.newTextPost };
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newTextPost = action.newPostText;
            return state;
        default:
            return state;
    }
}

export default ProfileReducer;