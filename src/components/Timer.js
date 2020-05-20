import React, { Component } from 'react';

import Moment from 'moment';

let yellow = { color: 'yellow' };
let blue = { color: 'blue' };
let green = { color: 'green' };

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // startTime: null, //start time null            
            endTime: null,
            timerColor: blue
        };
    }

    dispTime = setInterval(() => {
        if (this.props.isRunning) {
            let prevTime = this.props.displayTime;  // if displayTime is ms differece
            let newTime = prevTime - 1000;
            if (newTime <= 7200000 && newTime > 1800000) {
                this.setState({
                    timerColor: yellow
                })
            } else if (newTime <= 1800000) {
                this.setState({
                    timerColor: green
                })
            } else {
                this.setState({
                    timerColor: blue
                })
            }

            if (prevTime > 0) {
                this.props.setDisplayTime(parseFloat(newTime))
            }
            else {
                this.setState({
                    endTime: Date.now(),
                    timerColor: blue
                })
                this.props.setDurationText(Moment(this.state.endTime).fromNow());
                this.props.toggleRunning();
                this.props.saveFast(this.props.fastLength, this.props.displayTime);
                this.props.toggleStartButton(false);
            }
        }
    }, 1000);

    formatTime(ms) {
        var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((ms % (1000 * 60)) / 1000);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }

        return hours + ":" + minutes + ":" + seconds
    }

    timePassed = setInterval(() => {
        if(this.props.pastFasts.length !== 0) {
            this.props.setDurationText(Moment(this.state.endTime).fromNow())
        }
    }, 1000 * 60)

    render() {
        return (
            <div className="Timer">
                <h1 style={this.state.timerColor}>
                    {this.props.isRunning ? this.formatTime(this.props.displayTime) : "00:00:00"}
                </h1>
            </div>
        );
    }
}