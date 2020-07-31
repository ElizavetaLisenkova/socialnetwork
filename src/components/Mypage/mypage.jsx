import React from 'react'
import gen_dic from './mypage.module.css'
import Profile from './Profile/profile'
import Myposts from './Myposts/myposts'


const Mypage = (props) => {
    return (
        <div>
            <Profile />
            <Myposts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Mypage