import React, { Component } from 'react';

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
            isRunning: false,
            startTime: null,
            fastLength: 16, // length of fast in hours
            displayTime: 0,  // time to display on timer; ms left to count down
            selectedRadio: 0
        };

        this.handleStart = this.handleStart.bind(this);
    }

    startTimer() {
        this.setState({
            startTime: Date.now(),
            isRunning: true,
            displayTime: this.state.fastLength * 60 * 60 * 1000
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

    handleStop = () => {
        this.setState({
            isRunning: false
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleStart}>hi</button>
                {this.state.isRunning ? this.formatTime(this.state.displayTime) : "not running"}
            </div >
        )
    }
}