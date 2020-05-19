import React, { Component } from "react";
import Timer from './Timer';

export default class MainPanel extends Component {
    render() {
        return <div className="MainPanel">
            <p>MainPanel goes here</p>
            <Timer saveFast={this.props.saveFast} />
        </div>
    }
}
