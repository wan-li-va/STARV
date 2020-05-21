import React, { Component } from 'react';
import img from '../images/medal.png';

const Badge = () => { return (<div> <img src={img} alt="Gold Medal!!!!" width="100" height="100" /> </div>) }

export default class BadgePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    badgeHelper = () => {
        if (this.props.consecutiveFasts === 0 && this.props.numOfBadges > 0)
            return this.props.consecutiveFasts + 10
    }

    render() {
        return (
            <div>
                <text>
                    You have {this.badgeHelper()} successful STARVs in a row!!
                </text>
                {Array(this.props.numOfBadges).fill(<Badge />)}
            </div>
        );
    }

}