import React, { Component } from 'react';

export default class Filter extends Component{
    constructor(props){
        super(props);
        this.state ={
            filterBy: "none"
        }
    }

    handleSelectChange = () => {
        let filterSelect = document.getElementById("filterBy").value;
        this.setState({
            filterBy: filterSelect
        })
        this.props.handleSelectChange( this.state.filterBy )
        
    }

    render(){
        return (
            <div>
                <label margin-right="5px">Sort by </label>
                <select id="filterBy" onChange={this.handleSelectChange}>
                    <option value="none">None</option>
                    <option value="fastingTime">Fasting Time</option>
                    <option value="wasSuccessful">Successful Attempts</option>
                </select>
            </div>

        )
    }

}