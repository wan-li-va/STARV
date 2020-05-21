import React, { Component } from 'react';
import './styling/App.css';
import StatsPanel from "./components/StatsPanel.js";
import MainPanel from "./components/MainPanel.js";
import BadgePanel from "./components/BadgePanel.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'moment';

import firebase from "./firebase.js"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastFasts: [],
      consecutiveFasts: 0,
      numOfBadges: 0,
      fastJustCompleted: false,
      fastDB_ref: firebase.database().ref("fasts")
    }

  }

  componentDidMount = () => {
    this.state.fastDB_ref.once("value", snapshot => {
      if (snapshot && snapshot.exists())
        this.setState({ pastFasts: snapshot.val() })
    })
  }

  toggleJustCompleted = () => {
    this.setState({ fastJustCompleted: (!this.state.fastJustCompleted) })
  }

  saveFast = (length, displayTime) => {
    let intDisp = parseFloat(displayTime);
    let diff = (length * 60 * 60 * 1000) - intDisp;
    let dt = Date.now();

    let instanceFast = {
      dateMade: Moment().format("MMM DD, YYYY"),
      dateCompare: dt,
      wasSuccessful: intDisp === 0, //if not successful, then it is false that diff === 0
      timePassed: diff,
      index: this.state.pastFasts.length,
      notes: null,
      isEditing: false,
    };

    (instanceFast.wasSuccessful ?
      this.setState({ consecutiveFasts: this.state.consecutiveFasts + 1 }) :
      this.setState({ consecutiveFasts: 0 }));

    if (this.state.consecutiveFasts === 10)
      this.setState({ consecutiveFasts: 0, numOfBadges: this.state.numOfBadges + 1 });

    this.setState(prevState => {
      return ({
        pastFasts: [...prevState.pastFasts, instanceFast],
      })
    })

    if (intDisp === 0) {
      this.setState({ fastJustCompleted: true })
    } else {
      this.setState({ fastJustCompleted: false })
    }

    this.state.fastDB_ref.set(this.state.pastFasts)
  }

  toggleEdit = (fastToEdit) => {
    this.setState({
      pastFasts: this.state.pastFasts.map(fast => {
        if (fast.index === fastToEdit.index) {
          return ({
            ...fast,
            isEditing: !fast.isEditing
          })
        }
        return fast;
      })
    });
  }

  editNotes = (event, fastEdit) => {
    this.setState({
      pastFasts: this.state.pastFasts.map(fast => {
        if (fast.index === fastEdit.index) {
          return ({
            ...fast,
            notes: event.target.value
          })
        }
        return fast;
      })
    });
  }

  deleteFast = fastToDel => {
    const newPastFasts = this.state.pastFasts.filter(fast =>
      fastToDel.index !== fast.index
    );
    this.setState(prevState => {
      return ({ pastFasts: newPastFasts });
    });

    this.state.fastDB_ref.set(this.state.pastFasts)
  }

  deleteAll = () => {
    if (this.state.pastFasts.length !== 0) {
      let emptyList = [];
      this.setState(prevState => {
        return ({ pastFasts: emptyList })
      })
    }

    this.state.fastDB_ref.set(this.state.pastFasts)
  }

  render() {
    return (
      <div className="App">
        <div className="StatsPanel">
          <StatsPanel pastFasts={this.state.pastFasts} deleteFast={this.deleteFast} deleteAll={this.deleteAll}
            toggleEdit={this.toggleEdit} editNotes={this.editNotes} />
        </div>
        <div className="MainPanel">
          <MainPanel saveFast={this.saveFast} pastFasts={this.state.pastFasts}
            fastJustCompleted={this.state.fastJustCompleted}
            toggleJustCompleted={this.toggleJustCompleted} />
        </div>
        <div className="BadgePanel">
          <BadgePanel consecutiveFasts={this.state.consecutiveFasts} numOfBadges={this.state.numOfBadges} />
        </div>
      </div>);
  }
}