import React, { Component } from "react";

export default class Congrats extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Congrats"> 
                {(this.props.isRunning) ?
                    "" :
                    (this.props.isTimerChanged) ?
                        <div>
                            <img id="congrats" src={require("../images/congrats.gif")} alt="congrats" />
                        </div>
                        :
                        <div></div>
                }
            </div>
        )
    }
}