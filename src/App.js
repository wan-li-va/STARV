import React, { Component } from 'react';
import './App.css';
import StatsPanel from "./StatsPanel.js"
import MainPanel from "./MainPanel.js"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastFasts: []
    }
  }

  saveFast = (length, displayTime) => {
    let diff = (length * 60 * 60 * 1000) - displayTime;
    let instanceFast = {
      dateMade: Date.now(),
      wasSuccessful: diff > 0,
      timePassed: diff
    };

    this.setState(prevState => {
      return ({
        pastFasts: [...prevState.pastFasts, instanceFast]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <StatsPanel />
        <MainPanel saveFast={this.saveFast} />
      </div>
    );
  }
}

