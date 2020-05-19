import React, { Component } from 'react';
import './App.css';
import StatsPanel from "./StatsPanel.js"
import MainPanel from "./MainPanel.js"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <StatsPanel />
        <MainPanel />
      </div>
    );
  }
}

