import React from 'react';
import gen_dic from './myposts.module.css'
import Post from './Post/post';


const Myposts = () => {
  return (
    <div>
      <form >
        <textarea name="" id="" cols="30" rows="10"></textarea>
        {/* <input type="text" /> */}
        <button>Опубликовать</button>
      </form>
      <Post text="Приветики, я зарегалась ура" />
      <Post text="Публикую второй пост, все заебись" />
    </div>
  )
};

export default Myposts;