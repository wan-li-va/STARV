import React, { Component } from 'react';
import './Filter.css'

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleSelectChange = () => {
        let filterSelect = document.getElementById("filterBy").value;
        this.props.handleSelectChange(filterSelect);
    }

    render() {
        return (
            <div className="Filter">
                <label margin-right="5px">Sort by </label>
                <select id="filterBy" onChange={this.handleSelectChange}>
                    <option value="none">None</option>
                    <option value="fastingTime">Fast Length</option>
                    <option value="wasSuccessful">Successful Attempts</option>
                </select>
            </div>
        )
    }
}