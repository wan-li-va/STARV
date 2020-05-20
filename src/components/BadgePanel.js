import React, { Component } from 'react';

export default class BadgePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concurrentFasts: 0
        }
    }



    render() {
        return (
            <div>
                BADGE PANEL
            </div>
        );
    }

}