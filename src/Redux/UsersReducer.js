const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export let followActionCreator = (userID) => ({ type: FOLLOW , userID: userID})
export let unfollowActionCreator = (userID) => ({ type: UNFOLLOW , userID: userID})
export let setUsersActionCreator = (users) => ({ type: SET_USERS , users: users})


let InitialState = {
    users: []
}


let UsersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default:
            return state;
    }
}

export default UsersReducer;