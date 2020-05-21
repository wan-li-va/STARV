import React from 'react';
import '../styling/BadgePanel.css';
import ConsecFasts from './acheiements/ConsecFasts';

const BadgePanel = (props) => {
        return (
            <div className="BadgePanel">
                <h3 className="Achievements">Progress:</h3>
                <ConsecFasts consecutiveFasts={props.consecutiveFasts} numOfBadges={props.numOfBadges}/>
            </div>
        );
}

export default BadgePanel;