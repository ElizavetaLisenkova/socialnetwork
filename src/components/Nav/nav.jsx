import React from 'react';
import gen_dic from './nav.module.css'
console.log(gen_dic)

const Nav = () => {
    return(
        <nav className={gen_dic.nav}>
            <div><a href="/mypage">Profile</a></div>
            <div><a href="#">News</a></div>
            <div><a href="/dialogs">Message</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Photo</a></div>
            <div><a href="#">Settings</a></div>
        </nav>
    )
}

export default Nav;