import React from 'react'
import gen_dic from './post.module.css'

const Post = (props) => {
    return (
        <div className={gen_dic.post}>
            <img className={gen_dic.avatar} src="https://cs5.pikabu.ru/post_img/big/2014/09/11/8/1410434107_221535707.jpg" alt=""/>
            <div>{props.text}</div>
            <button>Like</button>
        </div>
    )
}

export default Post