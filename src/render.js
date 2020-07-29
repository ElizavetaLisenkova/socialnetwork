import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './Redux/state'


export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById("root")
    );
}


// const componentUsers = state.dialogsPage.dialogUsers.map((el) => <Users id={el.id} userName={el.userName} />);
// const componentMessage = state.dialogsPage.dialogMessages.map((el) => <Messages message={el.userMessage} />)



