import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Mypage from './components/Mypage/mypage';
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/dialogs'
import News from './components/News/news'
import Settings from './components/Settings/settings'

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
          <Route path='/mypage' render={() => <Mypage state={this.props.state.profilePage} addPost={this.props.addPost} updateNewPostText={this.props.updateNewPostText}/>} />
            <Route path='/dialogs' render={() => <Dialogs state={this.props.state.dialogsPage}/>} />
            <Route path='/settings' component={Settings} />
            <Route path='/news' component={News} />
          </div>
        </div>
      </BrowserRouter>
    );
  };
};


export default App;
