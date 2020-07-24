import React from 'react';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Content from './components/content';




class App extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Nav />
        <Content />
      </div>
    );
  };
};


export default App;
