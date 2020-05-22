import React, { Component } from "react";

import '../styling/MainPanel.css';
import Timer from './Timer';
import QuotesPanel from "./QuotesPanel";
import OptionsPanel from "./OptionsPanel";
import Congrats from "./Congrats";

export default class MainPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false,
            fastLength: 1 / 60 / 30,
            displayTime: 2000,
            startDisabled: false,
            durationText: "you have yet to complete a fast",
        }
    }

    toggleStartButton = b => {
        this.setState({ startDisabled: b })
    }

    setDurationText = new_text => {
        this.setState({ durationText: new_text })
    }

    toggleRunning = () => {
        this.setState({ isRunning: (!this.state.isRunning) })
    }

    setFastLength = new_length => {
        if (!isNaN(new_length)) // rejects NaN inputs
            this.setState({
                fastLength: new_length,
                displayTime: new_length * 1000 * 60 * 60
            });
    }

    setDisplayTime = new_time => {
        this.setState({
            displayTime: parseFloat(new_time)
        });
    }

    changeTimer = (changed) => {
        this.setState({ fastJustCompleted: changed });
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
                    pastFasts={this.props.pastFasts}
                />

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
                    setFastLength={this.setFastLength}
                    fastJustCompleted={this.props.fastJustCompleted}
                    pastFasts={this.props.pastFasts}
                />
                <QuotesPanel />
                {(this.props.fastJustCompleted) ?
                    <Congrats
                        isRunning={this.state.isRunning}
                        fastJustCompleted={this.props.fastJustCompleted}
                        toggleJustCompleted={this.props.toggleJustCompleted} /> : ""}
            </div>
        )
    }
}