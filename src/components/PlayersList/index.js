import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDrop} from 'react-dnd';
import {dndTypes} from 'app-constants';
import {playersListSelector, removePlayerFromSquad} from 'store/squadSlice';
import PlayerListItem from 'components/PlayerListItem';

import './PlayersList.scss';

const PlayersList = () => {
    const list = useSelector(playersListSelector);
    const dispatch = useDispatch();

    const [, dropTargetRef] = useDrop({
        accept: dndTypes.REMOVE_PLAYER,
        drop: (item) => {
            const {number} = item;

            dispatch(removePlayerFromSquad({number}));
        }
    });

    return (
        <div ref={dropTargetRef} className="players-list">
            {list.map((player) => <PlayerListItem key={player.number} player={player} />)}
        </div>
    );
};

export default PlayersList;
