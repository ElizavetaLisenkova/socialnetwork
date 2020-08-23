const SET_USER_DATA = 'SET_USER_DATA';

export let setAuthUserDataAC = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})


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

