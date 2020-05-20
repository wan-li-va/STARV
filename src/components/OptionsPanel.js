import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Moment from 'moment';
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillStopFill } from "react-icons/bs";

import ScheduleButtons from "./ScheduleButtons";

export default class OptionsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleStartStop = this.handleStartStop.bind(this);

    }

    handleStartStop = () => {
        if (this.props.isRunning) {
            this.setState({
                endTime: Date.now(),
            })
            this.props.toggleRunning();
            this.props.saveFast(this.props.fastLength, this.props.displayTime);
            this.props.setDurationText(Moment(this.state.endTime).fromNow());

            this.props.toggleStartButton(false);
        } else {
            // this.setState({startTime: Date.now()})
            this.props.setDisplayTime(this.props.fastLength * 60 * 60 * 1000);
            this.props.toggleRunning();
            this.props.toggleStartButton(true);
        }
    }

    render() {
        return <div id="OptionsPanel">
            <Button onClick={this.handleStartStop} disabled={this.props.startDisabled}><BsFillPlayFill />Start</Button>
            <Button variant="danger" onClick={this.handleStartStop} disabled={!this.props.isRunning}><BsFillStopFill />Stop</Button>

            <ScheduleButtons 
            setFastLength={this.props.setFastLength}
            toggleStartButton={this.props.toggleStartButton}
            isRunning={this.props.isRunning}
            durationText={this.props.durationText} />
        </div>
    }
}