import React from 'react'
import Profile from './ProfileInfo/profileInfo'

import MypostsContainer from './Myposts/mypostsContainer'
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfileAC} from '../../Redux/ProfileReducer'
import { withRouter } from 'react-router-dom';



class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10865;
        }
        debugger;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, { headers: { 'API-KEY': 'f82df6c3-33b7-4f9c-aecf-8cc3197eb73e' } })
            .then((response) => {
                this.props.setUserProfile(response.data)
            });
        debugger;
    }

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