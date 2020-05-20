import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import '../styling/ScheduleButtons.css';

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

    // helper method; necessary because custom uses a different field
    setCustomTime = e => {
        if (e != null) {
            let val = parseFloat(e.value);
            if (e.min <= val && e.max >= val) {
                this.props.setFastLength(val)
                // this.props.setDisplayTime()
                this.props.toggleStartButton(false);
            } else {
                this.props.toggleStartButton(true);
            }
        }
    }

    handleOptionChange = changeEvent => {
        let nowState = changeEvent.target.id;
        this.setState({ selectedRadio: (nowState != "custom") ? nowState : "Radio3" });

        if (nowState == "Radio3") {
            this.setCustomTime(document.getElementById("custom"))
        }
        else {
            this.props.setFastLength(parseFloat(changeEvent.target.value));
            this.props.toggleStartButton(false);
        }
    }

    render() {
        return <div className="radioButtons">
            <div className="radioButton">
                <input type="radio" name="Radios" id="Radio1" value={16}
                    checked={this.state.selectedRadio === "Radio1"} onClick={this.handleOptionChange}
                    disabled={this.props.isRunning} />
                    <label className="radioLabel"> 16:8 </label>
            </div>
            <div className="radioButton">
                <input type="radio" name="Radios" id="Radio2" value={18}
                    checked={this.state.selectedRadio === "Radio2"} onClick={this.handleOptionChange}
                    disabled={this.props.isRunning} />
                    <label className="radioLabel"> 18:6 </label>
            </div>
            <div className="radioButton" id="customSelect">
                <input type="radio" name="Radios" id="Radio3" value="option3"
                    checked={this.state.selectedRadio === "Radio3"} onClick={this.handleOptionChange}
                    disabled={this.props.isRunning} />
                    <label className="radioLabel">Custom</label>
                <OverlayTrigger placement="right" overlay={
                    <Tooltip>
                        Choose intended fasting hours between 5 and 23, inclusive.
                    </Tooltip>
                }>
                    <div id="customInput">
                        <input type="number" id="custom" name="quantity" min="5" max="23" placeholder={this.props.fastLength}
                            disabled={this.props.isRunning}
                            onChange={this.handleCustomTime}
                            onClick={this.handleOptionChange} />
                        <br />
                    </div>
                </OverlayTrigger>
            </div>
        </div>
    }
}