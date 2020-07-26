import React from 'react'
import gen_dic from './dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
    return (
        <div className={gen_dic.dialogs}>
            <div className={gen_dic.users}>
                <Users id="1" userName="Liza"/>
                <Users id="2" userName="sveta"/>
            </div>
            <div className={gen_dic.messages}>
                <UserMessages message="hello" />
                <UserMessages message="you disappointed me, Evgeniy" />
            </div>
        </div>
    )
}

const Users = (props) => {
    const path = '/dialogs/' + props.id
    return <div>
        <NavLink to={path} activeClassName={gen_dic.active}>{props.userName}</NavLink>
    </div>;
}

const UserMessages = (props) => {
    return <div>
        {props.message}
    </div>
}

export default Dialogs