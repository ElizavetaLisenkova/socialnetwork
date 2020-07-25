import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Mypage from './components/Mypage/mypage';
import {BrowserRouter, Route} from 'react-router-dom'
import Dialogs from './components/Dialogs/dialogs'





class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <div className='wrapper'>
          <Header />
          <Nav />
          <div className="mcontent">
            <Route path='/mypage' component={Mypage}/>
            <Route path='/dialogs' component={Dialogs}/>
          </div>
        </div>
      </BrowserRouter>
    );
  };
};


export default App;
