import React, { Component } from 'react';
import logo from './logo.svg';
import Grid from './Grid.js';
import './App.css';
// TODO: Add back & support testing
// import VisibleEntryList from './containers/VisibleEntryList';

class App extends Component {
  // <VisibleEntryList />
  render() {
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Life Track</h2>
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
