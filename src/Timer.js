import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Moment from 'moment';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isRunning: false, //tells whether timer is started
            startTime: null, //start time null
            // fastLength: 1 / 60 / 30, // length of fast in hours
            displayTime: 0,  // time to display on timer; ms left to count down
            selectedRadio: "Radio1",
            endTime: null,
            durationText: "",
        };

        this.handleStartStop = this.handleStartStop.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleCustomTime = this.handleCustomTime.bind(this);
    }

    dispTime = setInterval(() => {
        if (this.props.isRunning) {
            let prevTime = this.state.displayTime;  // if displayTime is ms differece
            let newTime = prevTime - 1000;
            if (prevTime > 0) {
                this.setState({
                    displayTime: parseInt(newTime)
                })
            } else {
                this.setState({
                    isRunning: false,
                    endTime: Date.now(),
                })
                this.props.saveFast(this.props.fastLength, this.state.displayTime);
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

    handleOptionChange = changeEvent => {
        this.setState({
            selectedRadio: changeEvent.target.id
        });

        let nowState = changeEvent.target.id;
        if (nowState !== "Radio3") {
            this.setState({
                fastLength: parseInt(changeEvent.target.value)
            })
        }
    };

    handleCustomTime = changeEvent => {
        let val = parseInt(changeEvent.target.value)
        if (changeEvent.target.min >= val && changeEvent.target.max <= val) {
            this.setState({
                fastLength: parseInt(val)
            })
        }
    }

    handleStartStop = () => {
        if (this.props.isRunning) {
            this.setState({
                isRunning: false,
                endTime: Date.now(),
            })
            this.props.saveFast(this.props.fastLength, this.state.displayTime);
        } else {
            this.setState({
                startTime: Date.now(),
                isRunning: true,
                displayTime: this.props.fastLength * 60 * 60 * 1000,
            })
        }
    }

    timePassed = setInterval(() => {
        //return Moment().fromNow();
        return 0;
    })

    render() {
        return (
            <div className="Timer">
                <h1>
                    {this.props.isRunning ? this.formatTime(this.state.displayTime) : "00:00:00"}
                </h1>

            </div >
                
        );
    }
}   