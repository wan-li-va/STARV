import React, { Component } from 'react';
import img from '../images/medal.png';
import '../styling/BadgePanel.css'

const Badge = () => { return (<img src={img} alt="Gold Medal!!!!" width="100" height="100" />) }

export default class BadgePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    badgeHelper = () => {
        if (this.props.numOfBadges > 0)
            return (
                <p>
                    <Badge /> x{this.props.numOfBadges}
                </p>
            );
    }

    render() {
        return (
            <div className="BadgePanel">
                <h3 className="Achievements">Progress:</h3>
                <text className="badgetext">
                    You have {this.props.consecutiveFasts + (this.props.numOfBadges * 10)} successful STARVs in a row!!
                </text>
                {this.badgeHelper()}
            </div>
        );
    }

}