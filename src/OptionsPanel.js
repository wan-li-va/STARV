import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class OptionsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRadio: "Radio1",
            buttonDisabled: false
        }

        this.handleStartStop = this.handleStartStop.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleCustomTime = this.handleCustomTime.bind(this);
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedRadio: changeEvent.target.id
        });

        let nowState = changeEvent.target.id;
        if (nowState !== "Radio3") {
            this.props.setFastLength(parseInt(changeEvent.target.value));
        }
    };

    handleCustomTime = changeEvent => {
        let val = parseInt(changeEvent.target.value)
        if (changeEvent.target.min <= val && changeEvent.target.max >= val) {
            this.props.setFastLength(parseInt(val))
            this.setState({
                buttonDisabled: false
            })
        } else {
            this.setState({
                buttonDisabled: true
            })
        }
    }

    handleStartStop = () => {
        if (this.props.isRunning) {
            this.setState({
                endTime: Date.now(),
            })
            this.props.toggleRunning();
            this.props.saveFast(this.props.fastLength, this.props.displayTime);

        } else {
            // this.setState({startTime: Date.now()})
            this.props.setDisplayTime(this.props.fastLength * 60 * 60 * 1000);
            this.props.toggleRunning();
        }
    }

    render() {
        return <div id="OptionsPanel">
            <Button onClick={this.handleStartStop} disabled={this.state.buttonDisabled}>Start</Button>
            <Button variant="danger" onClick={this.handleStartStop} disabled={!this.props.isRunning}>Stop</Button>
            {/* <button onClick={this.handleStart}>hi</button> */}

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
            <div className="form-check">
                <input type="radio" name="Radios" id="Radio3" value="option3"
                    checked={this.state.selectedRadio === "Radio3"} onClick={this.handleOptionChange}
                    disabled={this.props.isRunning} />
                <label className="form-check-label">
                    Custom
                    </label>
                <input type="number" id="quantity" name="quantity" min="5" max="23" placeholder={this.props.fastLength}
                    disabled={this.state.selectedRadio !== "Radio3"} onChange={this.handleCustomTime} />
                <br />
                <label>
                    Choose intended fasting hours between 5 and 23, inclusive.
                    </label>

            </div>
            <div>

            </div>
        </div>
    }
}