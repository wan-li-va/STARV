import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Moment from 'moment';
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillStopFill } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default class OptionsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRadio: "Radio1"
        }

        this.handleStartStop = this.handleStartStop.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleCustomTime = this.handleCustomTime.bind(this);
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedRadio: changeEvent.target.id,
        });

        let nowState = changeEvent.target.id;
        if (nowState !== "Radio3") {
            this.props.setFastLength(parseInt(changeEvent.target.value));
            this.props.toggleStartButton(false);
        } else {
            this.CustomHelper(document.getElementById("quantity"))
        }
    };

    handleCustomTime = changeEvent => {
        this.CustomHelper(changeEvent.target)
    }

    CustomHelper = e => {
        let val = parseInt(e.value);
        if (e.min <= val && e.max >= val) {
            this.props.setFastLength(parseInt(val))
            this.props.toggleStartButton(false);
        } else {
            this.props.toggleStartButton(true);
        }
    }

    handleStartStop = () => {
        if (this.props.isRunning) {
            this.setState({
                endTime: Date.now(),
            })
            this.props.toggleRunning();
            this.props.saveFast(this.props.fastLength, this.props.displayTime);
            this.props.setDurationText(Moment(this.state.endTime).fromNow());

            this.props.toggleStartButton(false);
        } else {
            // this.setState({startTime: Date.now()})
            this.props.setDisplayTime(this.props.fastLength * 60 * 60 * 1000);
            this.props.toggleRunning();
            this.props.toggleStartButton(true);
        }
    }

    render() {
        return <div id="OptionsPanel">
            <Button onClick={this.handleStartStop} disabled={this.props.startDisabled}><BsFillPlayFill />Start</Button>
            <Button variant="danger" onClick={this.handleStartStop} disabled={!this.props.isRunning}><BsFillStopFill />Stop</Button>

            <div className="radioButtons">
                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio1" value={16}
                        checked={this.state.selectedRadio === "Radio1"} onClick={this.handleOptionChange}
                        disabled={this.props.isRunning} />
                    <label className="form-check-label">
                        16:8
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" name="Radios" id="Radio2" value={18}
                        checked={this.state.selectedRadio === "Radio2"} onClick={this.handleOptionChange}
                        disabled={this.props.isRunning} />
                    <label className="form-check-label">
                        18:6
                    </label>
                </div>

                <div id="customSelect">
                    <div className="form-check">
                        <input type="radio" name="Radios" id="Radio3" value="option3"
                            checked={this.state.selectedRadio === "Radio3"} onClick={this.handleOptionChange}
                            disabled={this.props.isRunning} />
                        <label className="form-check-label">
                            Custom
                    </label>
                        <OverlayTrigger placement="right" overlay={
                            <Tooltip>
                                Choose intended fasting hours between 5 and 23, inclusive.
                    </Tooltip>
                        }>
                            <div id="customInput">
                                <input type="number" id="quantity" name="quantity" min="5" max="23" placeholder={this.props.fastLength}
                                    disabled={this.state.selectedRadio !== "Radio3"} onChange={this.handleCustomTime} />
                                <br />

                            </div>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <div className="timeSince">Time since last fast: {this.props.durationText}
            </div>
        </div>
    }
}