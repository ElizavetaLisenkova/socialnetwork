import React from 'react';
import gen_dic from './myposts.module.css'
import Post from './Post/post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';



const Myposts = (props) => {

  let newPostElement = React.createRef()
  let addPost = () => {
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewPostTextActionCreator(''));
  }
  let componentPosts = props.state.posts.map( (el) => <Post text={el.mes}/>);
  let updateNewTextPost = () => {
    props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
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