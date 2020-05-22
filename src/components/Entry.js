import React, { Component } from "react";
import { BsFillAwardFill, BsX, BsPencil } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

import '../styling/Entry.css';

export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    formatTime = ms => {
        var hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((ms % (1000 * 60)) / 1000);

        if (minutes < 10)
            minutes = "0" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;
        if (hours < 10)
            hours = "0" + hours;
        return hours + ":" + minutes + ":" + seconds
    }

    isSuccess = b => { return ((b === true) ? "Yes" : "No"); }

    render() {
        return (
            <div className="Entry">
                <Card bg={this.props.fast.wasSuccessful ? "success" : "danger"}>
                    <Card.Body>
                        {(this.props.fast.wasSuccessful) ?
                            <div className="header">
                                <div className="div1"><Button variant="outline-dark" size="sm"
                                    onClick={() => this.props.deleteFast(this.props.fast)}>
                                    <BsX /></Button></div>
                                <div className="div2"><BsFillAwardFill /></div>
                            </div>
                            :
                            <div className="header">
                                <div className="div1"><Button variant="outline-dark" size="sm"
                                    onClick={() => this.props.deleteFast(this.props.fast)}>
                                    <BsX /></Button></div>
                            </div>}
                        <br />
                        < Card.Text >
                            <em>Date Completed:</em> {this.props.fast.dateMade} <br />
                            <em>Duration:</em> {this.formatTime(this.props.fast.timePassed)} <br />
                            <em>Success:</em> {this.isSuccess(this.props.fast.wasSuccessful)}
                        </Card.Text>
                        {(this.props.fast.isEditing) ?
                            <div>
                                <textarea
                                    name="notes"
                                    value={this.props.fast.notes}
                                    placeholder="Notes"
                                    onChange={(e) => this.props.editNotes(e, this.props.fast)}
                                    id="editNotes"
                                />
                                <br />
                                <Button className="edit" variant="outline-dark" size="sm"
                                    onClick={() => this.props.toggleEdit(this.props.fast)}>
                                    Save
                                </Button>
                            </div>
                            :
                            <div>
                                <div id="notes">
                                    <em>Notes:</em> {this.props.fast.notes}
                                </div>
                                <Button className="edit" variant="outline-dark" size="sm"
                                    onClick={() => this.props.toggleEdit(this.props.fast)}>
                                    <BsPencil />
                                </Button>
                            </div>}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}