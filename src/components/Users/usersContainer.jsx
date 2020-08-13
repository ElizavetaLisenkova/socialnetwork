import React from 'react'
import Users from './users'
import { connect } from 'react-redux'
import { setUsersActionCreator, unfollowActionCreator, followActionCreator } from '../../Redux/UsersReducer'


let mapStateToProps = (state) => {
    return {
    users: state.usersPage.users,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        set_users: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)


export default UsersContainer;