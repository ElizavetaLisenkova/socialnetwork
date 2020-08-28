import React from 'react'
import Profile from './ProfileInfo/profileInfo'
import MypostsContainer from './Myposts/mypostsContainer'
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfileAC} from '../../Redux/ProfileReducer'
import { withRouter } from 'react-router-dom';
import { userAPI } from '../../API/api';



class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10865;
        }
        userAPI.getProfileInfo(userId).then((data) => {this.props.setUserProfile(data)})           
    };
      


    render () {
        return (
            <div>
                <Profile {...this.props} />
                <MypostsContainer />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
    }) (withRouter(ProfileAPIComponent));




export default ProfileContainer;