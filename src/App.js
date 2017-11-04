import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './Grid.js';
import './App.css';
import VisibleEventList from './containers/VisibleEventList';

class App extends Component {
  render() {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Life Track</h2>
        </div>
        <VisibleEventList />
				<div className="container">
				<Grid height={12} width={31} />
				<Grid height={4} width={7} />
				</div>
      </div>
    );
  }
}

export default App;
