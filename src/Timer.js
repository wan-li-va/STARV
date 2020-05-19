import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false, //tells whether timer is started
            startTime: null, //start time null
            fastLength: 16, // length of fast in hours
            displayTime: 0,  // time to display on timer; ms left to count down
            selectedRadio: "option1"
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
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
        this.setState({
            startTime: Date.now(),
            isRunning: true,
            displayTime: this.state.fastLength * 60 * 60 * 1000,
        })
    }

    //add save functionality
    handleStop = () => {
        if (this.state.isRunning) {
            this.setState({
                isRunning: false,
            })
            this.props.saveFast(this.state.length, this.state.displayTime);
        }
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.isRunning ? this.formatTime(this.state.displayTime) : "00:00:00"}
                </h1>

                <br />
                <Button onClick={this.handleStart}>Start</Button>
                <Button variant="danger" onClick={this.handleStop}>Stop</Button>
                {/* <button onClick={this.handleStart}>hi</button> */}

                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio1" value="option1" checked={this.state.selectedRadio === "option1"} onChange={this.handleOptionChange} />
                    <label className="form-check-label">
                        16:8
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio2" value="option2" checked={this.state.selectedRadio === "option2"} onChange={this.handleOptionChange} />
                    <label className="form-check-label">
                        18:6
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio3" value="option3" checked={this.state.selectedRadio === "option3"} onChange={this.handleOptionChange} />
                    <label className="form-check-label">
                        Custom:
                    </label>
                    <input type="number" id="quantity" name="quantity" min="5" max="23" />
                    <input type="submit" value="Submit" />
                </div>

            </div >



        );
    }
}