import React from 'react'
import gen_dic from './mypage.module.css'
import Profile from './Profile/profile'

import MypostsContainer from './Myposts/mypostsContainer'


const Mypage = (props) => {
    return (
        <div>
            <Profile />
            <MypostsContainer />
        </div>
    )
}

export default Mypage;