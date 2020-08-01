import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';
import Myposts from "./myposts"


const MypostsContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewPostTextActionCreator(''));
  };

  let updateNewTextPost = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
   <Myposts addPost={addPost} updateNewTextPost={updateNewTextPost} posts={props.state.posts} newTextPost={props.state.newTextPost}/>
  );
};

export default MypostsContainer;