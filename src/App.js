import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Mypage from './components/Mypage/mypage';
import { BrowserRouter, Route } from 'react-router-dom'
import News from './components/News/news'
import Settings from './components/Settings/settings'
import DialogsContainer from './components/Dialogs/dialogsContainer';
import UsersContainer from './components/Users/usersContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter >
        <div className='wrapper'>
          <Header />
          <Nav />
          <div className="mcontent">
          <Route path='/mypage' render={() => <Mypage />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/settings' component={Settings} />
            <Route path='/news' component={News} />
            <Route path='/users' render = {() => <UsersContainer />} />
          </div>
        </div>
      </BrowserRouter>
    );
  };
};


export default App;
