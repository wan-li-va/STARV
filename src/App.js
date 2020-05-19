import React, { Component } from 'react';
import './App.css';
import StatsPanel from "./StatsPanel.js"
import MainPanel from "./MainPanel.js"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <StatsPanel />
        <MainPanel />
      </div>
    );
  }
}

