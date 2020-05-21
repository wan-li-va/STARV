import React, { Component } from "react";
import Entry from './Entry.js';
import Filter from './Filter.js';
import '../styling/StatsPanel.css';
import Button from "react-bootstrap/Button";
import { BsFillTrashFill } from "react-icons/bs";

export default class StatsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFiltering: false,
            filterBy: "none"
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    calcSuccess = () => {
        let percentSucc;
        if (this.props.pastFasts.length !== 0) {
            let successes = 0;
            for (let i = 0; i < this.props.pastFasts.length; i++) {
                if (this.props.pastFasts[i].wasSuccessful) {
                    successes++;
                }
            }
            percentSucc = Math.round(successes / this.props.pastFasts.length * 100);
        } else {
            percentSucc = "";
        }
        return percentSucc;
    }

    handleSelectChange = (filterCat) => {
        if (filterCat !== "none") {
            this.setState({ isFiltering: true })
        }
        else {
            this.setState({ isFiltering: false })
        }
        this.setState({ filterBy: filterCat });
    }

    sortBy = () => {
        var starvs = this.props.pastFasts.slice(); //copy of fastFasts to save og list
        if (this.state.isFiltering) {
            if (this.state.filterBy === "fastingTime") {
                starvs.sort(function (fast1, fast2) {
                    return fast2.timePassed - fast1.timePassed;
                });
            } else if (this.state.filterBy === "wasSuccessful") {
                starvs.sort(function (fast1, fast2) {
                    return fast2.wasSuccessful - fast1.wasSuccessful;
                })
            }
        }
        else {
            starvs.sort(function (fast1, fast2) {
                return fast2.dateCompare - fast1.dateCompare;
            })
        }
        return starvs
    }

    render() {
        let starvs;
        let newStarvs;
        if (this.props.pastFasts.length === 0) {
            newStarvs =
                <img id="motivate" src={require("../images/motivate.gif")} alt="motivate" />
        } else {
            starvs = this.sortBy();
            newStarvs = starvs.map(fast => {
                return (
                    <Entry key={fast.index} index={fast.index} fast={fast} deleteFast={this.props.deleteFast}> </Entry>
                )
            })
        }


        return (
            <div className="StatsPanel">
                <div className="history">
                    <h3> <span className="logo">STARV</span> History</h3>
                </div>
                <div className="success">
                    <strong>Success rate: {(this.props.pastFasts.length === 0) ? "" : this.calcSuccess()}% </strong>
                </div>

                <div className="Entries">
                    {newStarvs}
                </div>

                <div>
                    <Filter pastFasts={this.props.pastFasts} handleSelectChange={this.handleSelectChange} />
                </div>

                <div>
                    <Button variant="danger" size="sm" onClick={this.props.deleteAll}>
                        <BsFillTrashFill /> Delete All
                    </Button>
                </div>
            </div>
        )
    }
}