const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

let InitialState = {
    posts: [
        { id: 1, mes: "Приветики, я зарегалась ура" },
        { id: 2, mes: "Публикую второй пост, все заебись" },
    ],
    newTextPost: ""

}
let ProfileReducer = (state=InitialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let stateCopy = {...state}
            let newPost = { id: 3, mes: state.newTextPost };
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newTextPost = {...state.newTextPost}
            stateCopy.newTextPost = action.newPostText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default ProfileReducer;