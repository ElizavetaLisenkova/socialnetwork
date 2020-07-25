import React from 'react'
import gen_dic from './mypage.module.css'
import Profile from './Profile/profile'
import Myposts from './Myposts/myposts'


const Mypage = () => {
    return (
        <div>
            <Profile />
            <Myposts />
        </div>
    )
}

export default Mypage