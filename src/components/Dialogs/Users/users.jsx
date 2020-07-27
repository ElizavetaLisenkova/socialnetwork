import React from 'react'
import { NavLink } from 'react-router-dom'
import gen_dic from './users.module.css'

const Users = (props) => {
    const path = '/dialogs/' + props.id
    return <div className={gen_dic.users}>
        <NavLink to={path} activeClassName={gen_dic.active}>{props.userName}</NavLink>
    </div>;
}

export default Users