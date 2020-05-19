import React, { Component } from "react";
import Timer from './Timer';
import QuotesPanel from "./QuotesPanel"
import OptionsPanel from "./OptionsPanel"
export default class MainPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false,
            fastLength: 1 / 60 / 30,
        }
    }

    toggleRunning = () => {
        this.setState({ isRunning: !this.state.isRunning })
        console.log("switching status to " + this.state.isRunning)
    }

    setFastLength = (new_length) => {
        this.setState({ fastLength: new_length })
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
                    toggleRunning={this.toggleRunning} />
                <OptionsPanel
                    toggleRunning={this.toggleRunning}
                    setFastLength={this.setFastLength}
                    isRunning={this.state.isRunning}
                    saveFast={this.props.saveFast} />
                <QuotesPanel />
            </div>
        )
    }
}
