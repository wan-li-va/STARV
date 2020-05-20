import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { BsFillAwardFill, BsCheck, BsX } from "react-icons/bs";
import '../styling/Entry.css'

export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

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

    isSuccess(b) {
        if (b === true) {
            return "Yes"
        }
        else {
            return "No"
        }
    }

    render() {
        return (
            <div className="Entry">
                <div>
                    <Card bg={this.props.fast.wasSuccessful ? "success" : "danger"}  >
                        <Card.Body>
                            {(this.props.fast.wasSuccessful) ? <div className="text-right"><BsFillAwardFill /></div> : ""}
                            < Card.Text >
                                <em>Date Completed:</em> {this.props.fast.dateMade} <br />
                                <em>Duration:</em> {this.formatTime(this.props.fast.timePassed)} <br />
                                <em>Success:</em> {this.isSuccess(this.props.fast.wasSuccessful)} {(this.props.fast.wasSuccessful) ? <BsCheck /> : <BsX />}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div >
            </div>
        )
    }
}