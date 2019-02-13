import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import Grid from './Grid.js';
import MonthDisplay from './components/MonthDisplay.js';
import VisibleActivityTable from './containers/VisibleActivityTable.js';
import ActivityInput from './components/ActivityInput.js';
import './App.css';
// TODO: Add back & support testing
import VisibleEntryList from './containers/VisibleEntryList';

class App extends Component {
  render() {
      // TODO: Add checking around year and month
      const year = this.props.match.params['year'];
      const month = this.props.match.params['month'] - 1;
      let content = null;
      if (year !== undefined && month !== undefined) {
        content = (
          <div className="container">
            <MonthDisplay year={year} month={month} />
          </div>
        );
      } else {
        content = (
          <div>
		    <div className="container">
              <VisibleEntryList />
            </div>
		    <div className="container">
              <Grid height={12} width={31} />
              <Grid height={4} width={7} />
            </div>
          </div>
        );
      }
	  content = <VisibleActivityTable />;
      return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Life Track</h2>
        </div>
		<ActivityInput endpoint="/api/timeline/activities/" />
        {content}
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
