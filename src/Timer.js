import React, { Component } from 'react';

import Moment from 'moment';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isRunning: false, //tells whether timer is started
            startTime: null, //start time null
            // fastLength: 1 / 60 / 30, // length of fast in hours
            displayTime: this.props.fastLength*60*60*1000,  // time to display on timer; ms left to count down
            
            endTime: null,
            durationText: "",
        };     
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
                    endTime: Date.now(),
                    durationText: Moment(this.state.endTime).fromNow()
                })
                this.props.toggleRunning();
                this.props.saveFast(this.props.fastLength, this.state.displayTime);
            }
        }else{
            this.setState({displayTime: this.props.fastLength*60*60*1000})
        }

        // console.log("fast length: " + this.props.fastLength)
        // console.log("display time: " + this.state.displayTime)   
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
        this.setState({
            durationText: Moment(this.state.endTime).fromNow()
        }) 
    }, 1000*60)

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