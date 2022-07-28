import React from 'react';
import {useDispatch} from 'react-redux';
import {useDrop} from 'react-dnd';
import {dndTypes, selectionQuality} from 'app-constants';
import {addPlayerToSquad} from 'store/squadSlice';

import './PitchPlayer.scss';

const PitchPlayer = ({index, player, preferredRole}) => {
    const dispatch = useDispatch();
    const number = player?.number ?? 'N';
    let quality = selectionQuality.NONE;

    if (player) {
        if (player.role === preferredRole) {
            quality = selectionQuality.GOOD;
        } else {
            quality = selectionQuality.BAD;
        }
    }

    const [, dropTargetRef] = useDrop({
        accept: dndTypes.ADD_PLAYER,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        drop: (item) => {
            const {number} = item;

            dispatch(addPlayerToSquad({index, number}));
        }
    });

    return (
        <div ref={dropTargetRef} className={`pitch-player pitch-player--${quality}`}>
            {number}
        </div>
    );
};

export default PitchPlayer;
