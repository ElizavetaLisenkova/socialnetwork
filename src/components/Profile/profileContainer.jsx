import React from 'react'
import Profile from './ProfileInfo/profileInfo'
import MypostsContainer from './Myposts/mypostsContainer'
import { connect } from 'react-redux';
import { getMyPage} from '../../Redux/ProfileReducer'
import { withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import ProfileStatus from './ProfileInfo/ProfileStatus';



class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 10865;
        }
        this.props.getMyPage(userId);     
    };
      


    render () {

        return (
            <div>
                <Profile {...this.props} />
                <ProfileStatus />
                <MypostsContainer />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


export default compose(
    connect(mapStateToProps, {getMyPage,}),
    withAuthRedirect,
    withRouter,
)(ProfileAPIComponent);
