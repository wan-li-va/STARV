import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { BsFillAwardFill, BsX } from "react-icons/bs";
import '../styling/Entry.css'
import Button from "react-bootstrap/Button";

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

    //FIX DELETE

    render() {
        return (
            <div className="Entry">
                <div>
                    <Card bg={this.props.fast.wasSuccessful ? "success" : "danger"}  >
                        <Card.Body>
                            {(this.props.fast.wasSuccessful) ?
                                <div className="header">
                                    <div className="div1"><Button variant="outline-dark" size="sm"
                                        value={this.props.fast.index} onClick={this.props.deleteInst(this.props.fast)}>
                                        <BsX /></Button></div>
                                    <div className="div2"><BsFillAwardFill /></div>
                                </div>
                                :
                                <div className="header">
                                    <div className="div1"><Button variant="outline-dark" size="sm"
                                        value={this.props.fast.index} onClick={this.props.deleteInst(this.props.fast)}>
                                        <BsX /></Button></div>
                                </div>}
                            <br />
                            < Card.Text >
                                <em>Date Completed:</em> {this.props.fast.dateMade} <br />
                                <em>Duration:</em> {this.formatTime(this.props.fast.timePassed)} <br />
                                <em>Success:</em> {this.isSuccess(this.props.fast.wasSuccessful)}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div >
            </div>
        )
    }
}