import React from 'react'
import gen_dic from './content.module.css'
import Profile from './Profile/profile'
import Myposts from './Myposts/myposts'


const Content = () => {
    return (
        <div>
            <Profile />
            <Myposts />
        </div>
    )
}

export default Content