import React from 'react';
import gen_dic from './myposts.module.css'
import Post from './Post/post';


const Myposts = () => {
    return(
      <div>
        <form >
          <input type="text"/>
          <button>Опубликовать</button>
        </form>
        <Post />
        <Post />
      </div>
    )
};

export default Myposts;