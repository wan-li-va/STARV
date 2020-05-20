import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default class ScheduleButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRadio: "Radio1"
        }

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleCustomTime = this.handleCustomTime.bind(this);
    }

    handleCustomTime = changeEvent => {
        if (!this.props.isRunning)
            this.setCustomTime(changeEvent.target)
    }

    setCustomTime = e => {
        let val = parseFloat(e.value);
        if (e.min <= val && e.max >= val) {
            this.props.setFastLength(parseFloat(val))
            this.props.toggleStartButton(false);
        } else {
            this.props.toggleStartButton(true);
        }
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedRadio: changeEvent.target.id,
        });

        let nowState = changeEvent.target.id;
        if (nowState !== "Radio3") {
            this.props.setFastLength(parseFloat(changeEvent.target.value));
            this.props.toggleStartButton(false);
        } else {
            this.setCustomTime(document.getElementById("quantity"))
        }
    };

    render() {
        return <div className="radioButtons">
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
                                disabled={this.props.isRunning} onChange={this.handleCustomTime} 
                                onClick={this.handleOptionChange}/>
                            <br />
                        </div>
                    </OverlayTrigger>
                </div>
            </div>
            <div className="timeSince">Time since last fast: {this.props.durationText}
            </div>
        </div >
    }
}