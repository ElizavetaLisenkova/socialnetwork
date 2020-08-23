import React from 'react'
import Users from './users'
import * as axios from 'axios';
import { connect } from 'react-redux'
import { setUsersAC, unfollowAC, followAC, setCurrentPageAC, setUsersCountAC, setLoadingAC } from '../../Redux/UsersReducer'

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.set_loading(true)
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users', 
            { withCredentials: true} ,
            { headers: { 'API-KEY': 'f82df6c3-33b7-4f9c-aecf-8cc3197eb73e' } })
            .then((response) => {
                this.props.set_loading(false)
                this.props.set_users(response.data.items);
                this.props.set_users_count(response.data.totalCount);
            });
    }

    changePage = (pageNumber) => {
        this.props.set_current_page(pageNumber)
        this.props.set_loading(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { headers: { 'API-KEY': 'f82df6c3-33b7-4f9c-aecf-8cc3197eb73e' } })
            .then((response) => {
                this.props.set_loading(false)
                this.props.set_users(response.data.items);
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