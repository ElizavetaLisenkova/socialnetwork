import React from 'react';
import './App.css';
import Nav from './components/Nav/nav';

import { BrowserRouter, Route } from 'react-router-dom'
import News from './components/News/news'
import Settings from './components/Settings/settings'
import DialogsContainer from './components/Dialogs/dialogsContainer';
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/profileContainer';
import HeaderContainer from './components/Header/headerContainer';
import Login from './components/Login/login';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter >
        <div className='wrapper'>
          <HeaderContainer />
          <Nav />
          <div className="mcontent">
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/settings' component={Settings} />
            <Route path='/news' component={News} />
            <Route path='/users' render = {() => <UsersContainer />} />
            <Route path='/login' render = {() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  };
};


export default App;
