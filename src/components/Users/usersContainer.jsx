import React from 'react'
import Users from './users'
import { connect } from 'react-redux'
import { setUsersAC, unfollowAC, followAC, setCurrentPageAC, setUsersCountAC, setLoadingAC } from '../../Redux/UsersReducer'
import { userAPI } from '../../API/api';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.set_loading(true)
            userAPI.getUsers()
            .then((data) => {
                this.props.set_loading(false)
                this.props.set_users(data.items);
                this.props.set_users_count(data.totalCount);
            });
    }

    changePage = (pageNumber) => {

        this.props.set_current_page(pageNumber)
        this.props.set_loading(true)
        userAPI.getUsers2(this.props.pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.set_loading(false)
                this.props.set_users(data.items);
            });
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
                isLoading={this.props.isLoading}/>
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
    };
}


const UsersContainer = connect(mapStateToProps, {
    follow: followAC,

    unfollow: unfollowAC,
    
    set_users: setUsersAC,

    set_current_page: setCurrentPageAC,
 
    set_users_count: setUsersCountAC,
  
    set_loading: setLoadingAC,
    }) (UsersAPIComponent)



    
export default UsersContainer;