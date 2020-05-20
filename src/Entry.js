import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
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
            // <div className="Entry">
            <div>
                <Card bg={this.props.fast.wasSuccessful ? "success" : "danger"}>
                    <Card.Body>
                        <Card.Text>
                            Date Completed: {this.props.fast.dateMade} <br />
                                Duration: {this.formatTime(this.props.fast.timePassed)} <br />
                                Success: {this.isSuccess(this.props.fast.wasSuccessful)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            // </div>
        )
    }
}