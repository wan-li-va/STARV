import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Moment from 'moment';
import { BsFillPlayFill, BsFillStopFill } from "react-icons/bs";

import ScheduleButtons from "./ScheduleButtons";

export default class OptionsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleStartStop = () => {
        if (this.props.isRunning) {
            this.setState({
                endTime: Date.now(),
            })
            this.props.toggleRunning();
            this.props.saveFast(this.props.fastLength, this.props.displayTime);
            this.props.setDurationText(Moment(Date.now()).fromNow());
            this.props.toggleStartButton(false);
        } else {
            this.props.setDisplayTime(this.props.fastLength * 60 * 60 * 1000);
            this.props.toggleRunning();
            this.props.toggleStartButton(true);
        }
    }

    setDuration = setInterval(() => {
        if (this.props.pastFasts.length !== 0)
            this.props.setDurationText(Moment(this.state.endTime).fromNow());
    }, 1000 * 60)

    render() {
        return <div id="OptionsPanel">
            <Button onClick={this.handleStartStop} disabled={this.props.startDisabled}><BsFillPlayFill />Start</Button>
            <Button variant="danger" onClick={this.handleStartStop} disabled={!this.props.isRunning}><BsFillStopFill />Stop</Button>

            <ScheduleButtons
                setFastLength={this.props.setFastLength}
                toggleStartButton={this.props.toggleStartButton}
                isRunning={this.props.isRunning}
                durationText={this.props.durationText} />

            <div className="timeSince">
                Time since last fast: {this.props.durationText}
            </div>
        </div>
    }
}