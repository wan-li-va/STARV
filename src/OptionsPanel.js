import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class OptionsPanel extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return <div id="OptionsPanel">
            <Button onClick={this.handleStartStop} disabled={this.state.isRunning}>Start</Button>
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

            </div>
        </div>
    }
}