import React, { Component } from "react";
import Timer from './Timer';
import QuotesPanel from "./QuotesPanel"
import OptionsPanel from "./OptionsPanel"
import '../styling/MainPanel.css'
export default class MainPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false, //tells whether timer is started
            fastLength: 1 / 60 / 30, // length of fast in hours; must be changed later to 16
            displayTime: 0,  // time to display on timer; ms left to count down
            startDisabled: false,
            durationText: "you have yet to complete a fast", // default value, gets changed immediately after success
        }
        this.toggleRunning = this.toggleRunning.bind(this)
        this.setFastLength = this.setFastLength.bind(this)
        this.setDisplayTime = this.setDisplayTime.bind(this)
        this.setDurationText = this.setDurationText.bind(this);
        this.toggleStartButton = this.toggleStartButton.bind(this)
    }

    toggleStartButton(b) {
        this.setState({ startDisabled: b })
    }

    setDurationText(new_text) {
        this.setState({ durationText: new_text })
    }

    toggleRunning() {
        this.setState({ isRunning: (!this.state.isRunning) })
    }

    setFastLength(new_length) {
        this.setState({ fastLength: new_length })
    }

    setDisplayTime(new_time) {
        this.setState({ displayTime: parseFloat(new_time) })
    }


    render() {
        return (
            <div className="MainPanel">
                <h1> <span className="mainlogo">STARV</span></h1>
                <p className="subtitle">
                    Superb Timer for Achieving Resolutions Victoriously:
                <br />
                    <i>A dieting solution for the 21st century</i>
                </p>
                <Timer
                    saveFast={this.props.saveFast}
                    isRunning={this.state.isRunning}
                    fastLength={this.state.fastLength}
                    displayTime={this.state.displayTime}
                    toggleRunning={this.toggleRunning}
                    setDisplayTime={this.setDisplayTime}
                    toggleStartButton={this.toggleStartButton}
                    setDurationText={this.setDurationText}
                    pastFasts={this.props.pastFasts} />

                <OptionsPanel
                    fastLength={this.state.fastLength}
                    displayTime={this.state.displayTime}
                    durationText={this.state.durationText}
                    setDurationText={this.setDurationText}
                    isRunning={this.state.isRunning}
                    saveFast={this.props.saveFast}
                    setDisplayTime={this.setDisplayTime}
                    startDisabled={this.state.startDisabled}
                    toggleStartButton={this.toggleStartButton}
                    toggleRunning={this.toggleRunning}
                    setFastLength={this.setFastLength} />
                <QuotesPanel />
            </div>
        )
    }
}