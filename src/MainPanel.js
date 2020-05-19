import React, { Component } from "react";
import Timer from './Timer';
import QuotesPanel from "./QuotesPanel"
import OptionsPanel from "./OptionsPanel"
export default class MainPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false, //tells whether timer is started
            fastLength: 1 / 60 / 30, // length of fast in hours
            displayTime: 0,  // time to display on timer; ms left to count down
        }

        this.toggleRunning = this.toggleRunning.bind(this)
        this.setFastLength = this.setFastLength.bind(this)
        this.setDisplayTime = this.setDisplayTime.bind(this);
    }

    toggleRunning() {
        this.setState({ isRunning: (!this.state.isRunning) })
    }

    setFastLength(new_length) {
        this.setState({ fastLength: new_length })
    }

    setDisplayTime(new_time) {
        this.setState({ displayTime: parseInt(new_time) })
    }
    render() {
        return (
            <div className="MainPanel">
                <h1>STARV</h1>
                <p>
                    Superb Timer for Achieving Resolutions Victoriously:
                <br />
                    <i>A dieting solution for the 21st century</i></p>
                <Timer
                    saveFast={this.props.saveFast}
                    isRunning={this.state.isRunning}
                    fastLength={this.state.fastLength}
                    toggleRunning={this.toggleRunning}
                    setDisplayTime={this.setDisplayTime}
                    displayTime={this.state.displayTime} />
                <OptionsPanel
                    fastLength={this.state.fastLength}
                    displayTime={this.state.displayTime}
                    toggleRunning={this.toggleRunning}
                    setFastLength={this.setFastLength}
                    isRunning={this.state.isRunning}
                    saveFast={this.props.saveFast}
                    setDisplayTime={this.setDisplayTime} />
                <QuotesPanel />
            </div>
        )
    }
}
