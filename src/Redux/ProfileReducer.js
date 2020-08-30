import { userAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'



export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getMyPage = (userId) => (dispatch) => {
    return userAPI.getProfileInfo(userId).then((data) => {dispatch(setUserProfile(data))})  
}

let InitialState = {
    posts: [
        { id: 1, mes: "Приветики, я зарегалась ура" },
        { id: 2, mes: "Публикую второй пост" },
    ],
    newTextPost: "",
    profile: null,

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
        };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export default ProfileReducer;