import React from 'react'
import gen_dic from './mypage.module.css'
import Profile from './Profile/profile'

import MypostsContainer from './Myposts/mypostsContainer'


const Mypage = (props) => {
    return (
        <div>
            <Profile />
            <MypostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Mypage;