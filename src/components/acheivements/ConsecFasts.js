import React, { Component } from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import img from '../../images/medal.png';

const Badge = () => { return (<img src={img} alt="Gold Medal!!!!" width="100" height="100" />) }


export default class ConsecFasts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    badgeHelper = () => {
        if (this.props.numOfBadges > 0)
            return (
                <OverlayTrigger placement="left" overlay={
                    <Tooltip>
                        This badge is earned for doing 10 consecutive STARVs
                    </Tooltip>
                }>
                    <p>
                        <Badge /> x{this.props.numOfBadges}
                    </p>
                </OverlayTrigger >
            );
    }

    render() {
        return (
            <div>
                <text className="badgetext">
                    You have {this.props.consecutiveFasts} successful STARVs in a row!!
                </text>
                {this.badgeHelper()}
            </div>
        );
    }
}