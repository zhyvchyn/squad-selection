import React from 'react';
import {useDrag} from 'react-dnd';
import {dndTypes} from 'app-constants';

import './PlayerListItem.scss';

const PlayerListItem = ({player}) => {
    const {name, number, role} = player;
    const [, dragSourceRef] = useDrag(() => ({
        type: dndTypes.ADD_PLAYER,
        item: {number}
    }));

    return (
        <div ref={dragSourceRef} className="player-list-item">
            <strong className="player-list-item__role">
                {role}
            </strong>
            <span className="player-list-item__number">
                {number}
            </span>
            <span className="player-list-item__name">
                {name}
            </span>
        </div>
    );
};

export default PlayerListItem;
