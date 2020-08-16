import React from 'react';
import gen_dic from './myposts.module.css'
import Post from './Post/post';




const Myposts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let componentPosts = props.posts.map( (el) => <Post id={el.id} key={el.id} text={el.mes}/>);

  let updateNewTextPost = () => {
    props.updateNewTextPost(newPostElement.current.value);
  };

  return (
    <div>
      <div >
        <textarea onChange={updateNewTextPost} ref={newPostElement} value={props.newTextPost}></textarea>
        <button onClick={addPost}>Опубликовать</button>
      </div>
      {componentPosts}
    </div>
  );
};

export default Myposts;