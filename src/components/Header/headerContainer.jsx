import Header from './header';
import React from 'react';
import * as axios from 'axios';
import {setAuthUserDataAC} from '../../Redux/AuthReducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', 
            { withCredentials: true} ,
            { headers: { 'API-KEY': 'f82df6c3-33b7-4f9c-aecf-8cc3197eb73e' } })
            .then((response) => {
                debugger;
                if (response.data.resultCode === 0) {
                    let { email, id,login} = response.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                    debugger;
                }
            });
    }
    render () {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserDataAC}) (HeaderContainer);