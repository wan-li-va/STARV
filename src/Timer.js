import React, { Component } from 'react';

import Moment from 'moment';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // startTime: null, //start time null            
            endTime: null,
            durationText: "",
    }

    dispTime = setInterval(() => {
        if (this.props.isRunning) {
            let prevTime = this.props.displayTime;  // if displayTime is ms differece
            let newTime = prevTime - 1000;
            if (prevTime > 0) {
                this.props.setDisplayTime(parseInt(newTime))
            } 
            else {
                this.setState({
                    endTime: Date.now(),
                    durationText: Moment(this.state.endTime).fromNow()
                })
                this.props.toggleRunning();
                this.props.saveFast(this.props.fastLength, this.props.displayTime);
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

<<<<<<< HEAD
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
        console.log("hit")
        let val = parseInt(changeEvent.target.value)
        if (changeEvent.target.min <= val && changeEvent.target.max >= val) {
            this.setState({
                startDisabled: false,
                fastLength: parseInt(val)
            })
        } else {
            this.setState({
                startDisabled: true
            })
        }
    }
=======
    
>>>>>>> 84965ab8b5f9af5008fe1405a202f051b6c02038

    

    timePassed = setInterval(() => {
        this.setState({
            durationText: Moment(this.state.endTime).fromNow()
        }) 
    }, 1000*60)

    render() {
        return (
            <div className="Timer">
                <h1>
                    {this.props.isRunning ? this.formatTime(this.props.displayTime) : "00:00:00"}
                </h1>

<<<<<<< HEAD
                <Button onClick={this.handleStartStop} disabled={this.state.startDisabled}>Start</Button>
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
=======
>>>>>>> 84965ab8b5f9af5008fe1405a202f051b6c02038
            </div >
                
        );
    }
}   