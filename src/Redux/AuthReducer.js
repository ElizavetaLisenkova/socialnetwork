import { userAPI } from '../API/api'; 

const SET_USER_DATA = 'SET_USER_DATA';


export let setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const authMe = () => (dispatch) => {
    return userAPI.getUserData()
    .then((data) => {
        if (data.resultCode === 0) {
            let { email, id,login} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    });
}

let InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export let AuthReducer = (state=InitialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }

        default:
            return state;
    }
}

