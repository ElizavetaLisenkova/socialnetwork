import React from 'react';
import gen_dic from './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header className={gen_dic.header}>
            <img className={gen_dic.logo} src="https://cs5.pikabu.ru/post_img/big/2014/09/11/8/1410434107_221535707.jpg" alt=""/>
            <div className={gen_dic.loginBlock}>
                
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;