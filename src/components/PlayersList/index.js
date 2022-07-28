import React from 'react';
import {useSelector} from 'react-redux';
import {playersListSelector} from 'store/squadSlice';
import PlayerListItem from 'components/PlayerListItem';

import './PlayersList.scss';

const PlayersList = () => {
    const list = useSelector(playersListSelector);

    return (
        <div className="players-list">
            {list.map((player) => <PlayerListItem key={player.number} player={player} />)}
        </div>
    );
};

export default PlayersList;
