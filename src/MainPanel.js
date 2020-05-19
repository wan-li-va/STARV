import React, { Component } from "react";
import Timer from './Timer';
import QuotesPanel from "./QuotesPanel"
export default class MainPanel extends Component {
    render() {
        return (
        <div className="MainPanel">
            <h1>STARV</h1>
            <p>
                Superb Timer for Achieving Resolutions Victoriously: 
                <br />
                <i>A dieting solution for the 21st century</i></p>
            <Timer saveFast={this.props.saveFast} />
            <QuotesPanel />
        </div>
        )
    }
}
