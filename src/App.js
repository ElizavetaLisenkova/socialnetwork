import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Content from './components/Content/content';





class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Nav />
        <div className="mcontent">
        <Content />
        </div>
      </div>
    );
  };
};


export default App;
