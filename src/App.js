import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './Grid.js';
import './App.css';

class App extends Component {
  render() {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
				<div className="container">
				<Grid height={12} width={31} />
				<Grid height={4} width={7} />
				</div>
      </div>
    );
  }
}

export default App;
