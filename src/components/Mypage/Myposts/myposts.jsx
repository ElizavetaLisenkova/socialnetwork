import React from 'react';
import gen_dic from './myposts.module.css'
import Post from './Post/post';


const Myposts = (props) => {

  let newPostElement = React.createRef()
  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  }
  let componentPosts = props.state.posts.map( (el) => <Post text={el.mes}/>);
  let updateNewTextPost = () => {
    props.updateNewPostText(newPostElement.current.value);
  }
  return (
    <div>
      <div >
        <textarea onChange={updateNewTextPost} ref={newPostElement} value={props.state.newTextPost}></textarea>
        <button onClick={addPost}>Опубликовать</button>
      </div>
      {componentPosts}
    </div>
    
  )
};

export default Myposts;