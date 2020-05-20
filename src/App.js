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
      pastFasts: [],
      isTimerChanged: false,
      id: 0
    }
  }

  saveFast = (length, displayTime) => {
    let intDisp = parseFloat(displayTime);
    let diff = (length * 60 * 60 * 1000) - intDisp;
    let dt = Date.now();

    this.setState(prevState => {
      return ({
        id: prevState++
      })
    })

    let instanceFast = {
      dateMade: Moment().format("MMM DD, YYYY"),
      dateCompare: dt,
      wasSuccessful: intDisp === 0, //if not successful, then it is false that diff === 0
      timePassed: diff,
      index: this.state.pastFasts.length,
      id: this.state.id
    };

    this.setState(prevState => {
      return ({
        pastFasts: [...prevState.pastFasts, instanceFast],
      })
    })

    if (intDisp === 0) {
      this.setState({ isTimerChanged: true })
    } else {
      this.setState({ isTimerChanged: false })
    }
  }

  deleteInst = instToDel => {
    const newFastPast = this.state.pastFasts.filter(inst =>
      instToDel.id !== inst.id
    );
    this.setState(
      { notesList: newFastPast }
    )
  }

  deleteAll = () => {
    if (this.state.pastFasts.length !== 0) {
      let emptyList = [];
      this.setState(prevState => {
        return ({ pastFasts: emptyList })
      })
    }

  }

  render() {
    return (
      <div className="App">
        <div className="StatsPanel">
          <StatsPanel pastFasts={this.state.pastFasts} deleteInst={this.deleteInst} deleteAll={this.deleteAll} />
        </div>
        <div className="MainPanel">
          <MainPanel saveFast={this.saveFast} pastFasts={this.state.pastFasts}
            isTimerChanged={this.state.isTimerChanged} />
        </div>
      </div>
    );
  }
}

