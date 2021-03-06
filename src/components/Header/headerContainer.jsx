import Header from './header';
import React from 'react';
import { authMe} from '../../Redux/AuthReducer';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }
    render () {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {authMe}) (HeaderContainer);