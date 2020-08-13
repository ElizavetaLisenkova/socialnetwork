const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})

let InitialState = {
    posts: [
        { id: 1, mes: "Приветики, я зарегалась ура" },
        { id: 2, mes: "Публикую второй пост, все заебись" },
        {id: 3, mes: "Данилочка самый лучший"}
    ],
    newTextPost: ""

}
let ProfileReducer = (state=InitialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: 3, mes: state.newTextPost }], 
            } 
        };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, 
                newTextPost: action.newPostText
            }
            
        }
        default:
            return state;
    }
}

export default ProfileReducer;