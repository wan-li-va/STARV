import React, { Component } from "react";
import Entry from './Entry.js';
import Filter from './Filter.js';

export default class StatsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFiltering: false,
            filterBy: "none"
        }
    }

    calcSuccess = () => {
        let percentSucc;
        if (this.props.pastFasts.length !== 0) {
            let successes = 0;
            for (let i = 0; i < this.props.pastFasts.length; i++) {
                let fastInst = this.props.pastFasts[i];
                let wasSucc = fastInst.wasSuccessful;
                if (wasSucc) {
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
            this.setState({
                isFiltering: true,
                filterBy: filterCat
            })
        }
        else {
            this.setState({
                isFiltering: false,
                filterBy: filterCat
            })
        }
    }




    render() {

        var starvs = this.props.pastFasts.map(fast => {
            return (
                <Entry key={fast.index.toString()} index={fast.index} fast={fast}> </Entry>
            )
        })

        return (
            <div className="StatsPanel">
                <h3>STARV History</h3>
                <div>
                    <strong>Success rate: {(this.props.pastFasts.length === 0) ? "" : this.calcSuccess()}% </strong>
                </div>

                <div>
                    {starvs}
                </div>

                <div>
                    <Filter pastFasts={this.props.pastFasts} />
                </div>

            </div>
        )
    }
}