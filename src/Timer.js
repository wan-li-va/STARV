import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Moment from 'moment';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false, //tells whether timer is started
            startTime: null, //start time null
            fastLength: 1 / 60 / 30, // length of fast in hours
            displayTime: 0,  // time to display on timer; ms left to count down
            selectedRadio: "Radio1",
            endTime: Date.now(),
            durationText: "",
        };

        this.handleStartStop = this.handleStartStop.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleCustomTime = this.handleCustomTime.bind(this);
    }

    dispTime = setInterval(() => {
        if (this.state.isRunning) {
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
                    durationText: Moment(this.state.endTime).fromNow()
                })
                this.props.saveFast(this.state.fastLength, this.state.displayTime);
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
        if (changeEvent.target.min <= val && changeEvent.target.max >= val) {
            this.setState({
                fastLength: parseInt(val)
            })
        }
    }

    handleStartStop = () => {
        if (this.state.isRunning) {
            this.setState({
                isRunning: false,
                endTime: Date.now(),
                durationText: Moment(this.state.endTime).fromNow()
            })
            this.props.saveFast(this.state.fastLength, this.state.displayTime);
        } else {
            this.setState({
                startTime: Date.now(),
                isRunning: true,
                displayTime: this.state.fastLength * 60 * 60 * 1000,
            })
        }
    }

    timePassed = setInterval(() => {
        this.setState({
            durationText: Moment(this.state.endTime).fromNow()
        }) 
    }, 1000*60)

    render() {
        return (
            <div className="Timer">
                <h1>
                    {this.state.isRunning ? this.formatTime(this.state.displayTime) : "00:00:00"}
                </h1>

                <Button onClick={this.handleStartStop} disabled={this.state.isRunning}>Start</Button>
                <Button variant="danger" onClick={this.handleStartStop} disabled={!this.state.isRunning}>Stop</Button>
                {/* <button onClick={this.handleStart}>hi</button> */}

                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio1" value={16}
                        checked={this.state.selectedRadio === "Radio1"} onClick={this.handleOptionChange}
                        disabled={this.state.isRunning} />
                    <label className="form-check-label">
                        16:8
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio2" value={18}
                        checked={this.state.selectedRadio === "Radio2"} onClick={this.handleOptionChange}
                        disabled={this.state.isRunning} />
                    <label className="form-check-label">
                        18:6
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio3" value="option3"
                        checked={this.state.selectedRadio === "Radio3"} onClick={this.handleOptionChange}
                        disabled={this.state.isRunning} />
                    <label className="form-check-label">
                        Custom
                    </label>
                    <input type="number" id="quantity" name="quantity" min="5" max="23" placeholder="16"
                        disabled={this.state.selectedRadio !== "Radio3"} onChange={this.handleCustomTime} />
                    <br />
                    <label>
                        Choose intended fasting hours between 5 and 23, inclusive.
                    </label>
                    
                </div>
                <div>
                    Time since last fast: {this.state.durationText}
                </div>
            </div >
                
        );
    }
}   