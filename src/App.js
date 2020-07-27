import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Mypage from './components/Mypage/mypage';
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/dialogs'
import News from './components/News/news'
import Settings from './components/Settings/setting'

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
          <Route path='/mypage' render={() => <Mypage componentPosts={this.props.componentPosts}/>} />
            <Route path='/dialogs' render={() => <Dialogs componentUsers={this.props.componentUsers} componentMessage={this.props.componentMessage} />} />
            <Route path='/settings' component={Settings} />
            <Route path='/news' component={News} />
          </div>
        </div>
      </BrowserRouter>
    );
  };
};


export default App;
