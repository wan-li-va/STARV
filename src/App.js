import React, { Component } from 'react';
import './styling/App.css';
import StatsPanel from "./components/StatsPanel.js"
import MainPanel from "./components/MainPanel.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastFasts: []
    }
  }

  saveFast = (length, displayTime) => {
    let intDisp = parseFloat(displayTime);
    let diff = (length * 60 * 60 * 1000) - intDisp;

    let instanceFast = {
      dateMade: Moment().format("MMM DD, YYYY"),
      wasSuccessful: intDisp === 0, //if not successful, then it is false that diff === 0
      timePassed: diff,
      index: this.state.pastFasts.length
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
        <div className="StatsPanel">
          <StatsPanel pastFasts={this.state.pastFasts} />
        </div>
        <div className="MainPanel">
          <MainPanel saveFast={this.saveFast} pastFasts={this.state.pastFasts} />
        </div>
      </div>
    );
  }
}

