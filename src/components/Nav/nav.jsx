import React from 'react';
import gen_dic from './nav.module.css'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <nav className={gen_dic.nav}>


            <div className={gen_dic.item}>
                <button className={gen_dic.button}>
                    <NavLink to="/mypage" activeClassName={gen_dic.active}>
                        Profile
                    </NavLink>
                </button>
            </div>

            <div className={gen_dic.item}>
                <button className={gen_dic.button}>
                    <NavLink to="/news" activeClassName={gen_dic.active}>
                        News
                    </NavLink>
                </button>
            </div>

            <div className={gen_dic.item}>
                <button className={gen_dic.button}>
                    <NavLink to="/dialogs" activeClassName={gen_dic.active}>
                        Message
                    </NavLink>
                </button>
            </div>

            <div className={gen_dic.item}>
                <button className={gen_dic.button}>
                    <NavLink to="/photo" activeClassName={gen_dic.active}>
                        Photo
                    </NavLink>
                </button>
            </div>

            <div className={gen_dic.item}>
                <button className={gen_dic.button}>
                    <NavLink to="/settings" activeClassName={gen_dic.active}>
                        Settings
                    </NavLink>
                </button>
            </div>


        </nav>
    )
}

export default Nav;