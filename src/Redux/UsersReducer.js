import { userAPI } from '../API/api';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const SET_LOADING = 'SET_LOADING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'


export let follow = (userID) => ({ type: FOLLOW , userID})
export let unfollow = (userID) => ({ type: UNFOLLOW , userID})
export let set_users = (users) => ({ type: SET_USERS , users})
export let set_current_page = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let set_users_count = (count) => ({type: SET_USERS_COUNT, totalUsersCount: count})
export let set_loading = (isLoading) => ({type: SET_LOADING, isLoading})
export let toggle_following = (userID, isFetching) => ({type: TOGGLE_FOLLOWING, userID, isFetching})


let InitialState = {
    users: [],
    currentPage: 1,
    pageSize: 100,
    totalUsersCount: 0,
    isLoading: false,
    followingInProgressId: [],
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

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }

        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }

        case TOGGLE_FOLLOWING: {
            return {
                ...state, 
                followingInProgressId: action.isFetching ? [...state.followingInProgressId, action.userID] : [state.followingInProgressId.filter(id => id != action.userID)]
            }
        }
        default:
            return state;
    }
}


export const getUsersThunkCreator1 = () => {
    return (dispatch) => {
        dispatch(set_loading(true))
        userAPI.getUsers()
        .then((data) => {
            dispatch(set_loading(false))
            dispatch(set_users(data.items));
            dispatch(set_users_count(data.totalCount));
        }); 
    }
}

export const getUsersThunkCreator2 = (pageNumber, pageSize) => {
    return (dispatch) => {
        
        dispatch(set_current_page(pageNumber))
        dispatch(set_loading(true))
        userAPI.getUsers2(pageNumber, pageSize)
            .then((data) => {
                dispatch(set_loading(false))
                dispatch(set_users(data.items));
            });
    }
}


export const unfollowThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(toggle_following(userID, true))
            userAPI.unfollow(userID).then((data) => 
                {if (data.resultCode === 0) {dispatch(unfollow(userID))
                dispatch(toggle_following(userID, false))}}                        
            )
    }
}

export const followThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(toggle_following(userID, true))
            userAPI.follow(userID).then((data) => 
                {if (data.resultCode === 0) {dispatch(follow(userID))
                dispatch(toggle_following(userID, false))}}                        
            )
    }
}
export default UsersReducer;