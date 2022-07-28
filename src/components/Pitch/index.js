import React from 'react';
import {useSelector} from 'react-redux';
import {roles} from 'app-constants';
import {currentFormationSelector, currentSquadSelector, playersListSelector} from 'store/squadSlice';
import PitchPlayer from 'components/PitchPlayer';

import './Pitch.scss';

function* iterate(a, b) {
    for (let i = a; i <= b; i += 1) {
        yield i;
    }
}

const Pitch = () => {
    const currentSquad = useSelector(currentSquadSelector);
    const players = useSelector(playersListSelector);
    const currentSquadPlayers = currentSquad.map((number) => players.find((player) => player.number === number));
    const currentFormation = useSelector(currentFormationSelector);
    const [defendersCount, midfieldersCount, strikersCount] = currentFormation
        .split('-')
        .map((countString) => +countString);
    const defenderIndexes = [...iterate(1, defendersCount)];
    const midfielderIndexes = [...iterate(defendersCount + 1, defendersCount + midfieldersCount)];
    const strikerIndexes = [...iterate(
        defendersCount + midfieldersCount + 1,
        defendersCount + midfieldersCount + strikersCount
    )];

    return (
        <div className="pitch">
            <div className="pitch__gk">
                <PitchPlayer index={0} player={currentSquadPlayers[0]} preferredRole={roles.GK} />
            </div>
            <div className="pitch__df">
                {defenderIndexes.map((index) => (
                    <PitchPlayer
                        key={`${roles.DF}:${index}`}
                        index={index}
                        player={currentSquadPlayers[index]}
                        preferredRole={roles.DF} />
                ))}
            </div>
            <div className="pitch__mf">
                {midfielderIndexes.map((index) => (
                    <PitchPlayer
                        key={`${roles.MF}:${index}`}
                        index={index}
                        player={currentSquadPlayers[index]}
                        preferredRole={roles.MF} />
                ))}
            </div>
            <div className="pitch__fw">
                {strikerIndexes.map((index) => (
                    <PitchPlayer
                        key={`${roles.FW}:${index}`}
                        index={index}
                        player={currentSquadPlayers[index]}
                        preferredRole={roles.FW} />
                ))}
            </div>
        </div>
    );
};

export default Pitch;
