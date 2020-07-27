import React from 'react';
import gen_dic from './myposts.module.css'
import Post from './Post/post';


let newPostElement = React.createRef()
let addPost = () => {
  alert(newPostElement.current.value);
}

const Myposts = (props) => {
  return (
    <div>
      <form >
        <textarea ref={newPostElement}></textarea>
        {/* <input type="text" /> */}
        <button onClick={addPost}>Опубликовать</button>
      </form>
      {props.componentPosts}
    </div>
  )
};

export default Myposts;