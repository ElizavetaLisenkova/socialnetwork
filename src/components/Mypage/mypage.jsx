import React from 'react'
import gen_dic from './mypage.module.css'
import Profile from './Profile/profile'
import Myposts from './Myposts/myposts'


const Mypage = (props) => {
    return (
        <div>
            <Profile />
            <Myposts componentPosts={props.componentPosts}/>
        </div>
    )
}

export default Mypage