import React from 'react';
import gen_dic from './header.module.css'

const Header = () => {
    return(
        <header className={gen_dic.header}>
            <img className={gen_dic.logo} src="https://cs5.pikabu.ru/post_img/big/2014/09/11/8/1410434107_221535707.jpg" alt=""/>
        </header>
    )
}

export default Header;