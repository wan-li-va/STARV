import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

const RadioList = [
    {
        value: "option1",
        option: "16:8"
    },
    {
        value: "option2",
        option: "18:6"
    },
    {
        value: "option3",
        option: ""
    }
];

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false, //tells whether timer is started
            startTime: null, //start time null
            fastLength: 16, // length of fast in hours
            displayTime: 0,  // time to display on timer; ms left to count down
            selectedRadio: 0,
            date: null, // calendar date
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    startTimer() {
        this.setState({
            startTime: Date.now(),
            isRunning: true,
            displayTime: this.state.fastLength * 60 * 60 * 1000,
        })
    }

    dispTime = setInterval(() => {
        let prevTime = this.state.displayTime;  // if displayTime is ms differece
        let newTime = prevTime - 1000;
        this.setState({
            displayTime: newTime
        })
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
            selectedRadio: changeEvent.target.value
        });
    };

    handleStart = () => {
        console.log("button clicked")
        this.startTimer()
    }

    //add save functionality
    handleStop = () => {
        this.setState({
            isRunning: false
        })
    }

    render() {
        return (
            <div>
                {this.state.isRunning ? this.formatTime(this.state.displayTime) : "not running"}
                <br />
                <Button onClick={this.handleStart}>hi</Button>
                {/* <button onClick={this.handleStart}>hi</button> */}

            </div >
        )
    }
}