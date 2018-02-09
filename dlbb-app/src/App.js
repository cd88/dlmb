import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBody from './AppBody';
import AppBarExampleComposition from './AppBarExampleComposition';

class App extends Component {
  render() {
    return (
      <div>
        <AppBarExampleComposition />  
        <img src={logo} className="logo" alt="logo" />
        <AppBody />
      </div>
    );
  }
}

export default App;
