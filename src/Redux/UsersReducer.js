const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const SET_LOADING = 'SET_LOADING'


export let followAC = (userID) => ({ type: FOLLOW , userID})
export let unfollowAC = (userID) => ({ type: UNFOLLOW , userID})
export let setUsersAC = (users) => ({ type: SET_USERS , users})
export let setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export let setUsersCountAC = (count) => ({type: SET_USERS_COUNT, totalUsersCount: count})
export let setLoadingAC = (isLoading) => ({type: SET_LOADING, isLoading})


let InitialState = {
    users: [],
    currentPage: 1,
    pageSize: 100,
    totalUsersCount: 0,
    isLoading: false,
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
        default:
            return state;
    }
}

export default UsersReducer;