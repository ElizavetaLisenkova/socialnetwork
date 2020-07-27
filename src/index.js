import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Users from './components/Dialogs/Users/users';
import Messages from './components/Dialogs/Messages/messages';


const dialogUsers = [
  {id: 1, userName: 'Liza'},
  {id: 2, userName: 'Sveta'}
]

const dialogMessages = [
  {userMessage: "hello"},
  {userMessage: "you disappointed me, Evgeniy"}
]

const componentUsers = dialogUsers.map( (el) => <Users id={el.id} userName={el.userName}/>);
const componentMessage = dialogMessages.map( (el) => <Messages message={el.userMessage}/>)

ReactDOM.render(
  <React.StrictMode>
    <App componentUsers={componentUsers} componentMessage={componentMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
