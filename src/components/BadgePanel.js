import React from 'react';
import ConsecFasts from './acheivements/ConsecFasts';

import '../styling/BadgePanel.css';

const BadgePanel = (props) => {
        return (
            <div className="BadgePanel">
                <h3 className="Achievements">Progress:</h3>
                <ConsecFasts consecutiveFasts={props.consecutiveFasts} numOfBadges={props.numOfBadges}/>
            </div>
        );
}

export default BadgePanel;