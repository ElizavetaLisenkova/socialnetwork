import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Mypage from './components/Mypage/mypage';
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/dialogs'
import News from './components/News/news'
import Settings from'./components/Settings/setting'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <div className='wrapper'>
          <Header />
          <Nav />
          <div className="mcontent">
            <Route path='/mypage' component={Mypage} />
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/settings' component={Settings} />
            <Route path='/news' component={News} />
          </div>
        </div>
      </BrowserRouter>
    );
  };
};


export default App;
