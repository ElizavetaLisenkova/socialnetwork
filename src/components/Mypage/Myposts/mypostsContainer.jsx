import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/ProfileReducer';
import Myposts from "./myposts"
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
      dispatch(updateNewPostTextActionCreator(''));
    },
    updateNewTextPost: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  }
};

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps) (Myposts)

export default MypostsContainer;