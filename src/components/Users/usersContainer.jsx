import React from 'react'
import Users from './users'
import { connect } from 'react-redux'
import {  getUsersThunkCreator1, getUsersThunkCreator2, followThunkCreator, unfollowThunkCreator } from '../../Redux/UsersReducer'
import { withAuthRedirect } from '../../hoc/AuthRedirect'
import { compose } from 'redux'

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers1()
    }

    changePage = (pageNumber) => {

        this.props.getUsers2(pageNumber, this.props.pageSize)
    
    }

    render() {
        return(
        <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePage={this.changePage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users}
                isLoading={this.props.isLoading}
                followingInProgressId={this.props.followingInProgressId}
                />
        )
    }
}

let mapStateToProps = (state) => {
    return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isLoading: state.usersPage.isLoading,
    followingInProgressId: state.usersPage.followingInProgressId
    };
}


    
export default compose(
    connect(mapStateToProps, {
        follow: followThunkCreator,
    
        unfollow: unfollowThunkCreator,
    
        getUsers1: getUsersThunkCreator1,
    
        getUsers2: getUsersThunkCreator2,
    
        
        }),
    withAuthRedirect,
)(UsersAPIComponent);