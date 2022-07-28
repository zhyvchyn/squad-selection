import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {formationsList} from 'app-constants';
import {currentFormationSelector, currentSquadSelector, saveCurrentSquad, setCurrentFormation} from 'store/squadSlice';
import Pitch from 'components/Pitch';

import './Schema.scss';

const Schema = () => {
    const dispatch = useDispatch();
    const currentFormation = useSelector(currentFormationSelector);
    const currentSquad = useSelector(currentSquadSelector);

    const formationChangeHandler = (event) => {
        const value = event.target.value;

        dispatch(setCurrentFormation(value));
    };

    const saveHandler = () => {
        dispatch(saveCurrentSquad({
            formation: currentFormation,
            squad: currentSquad
        }));
    };

    return (
        <div className="schema">
            <select value={currentFormation} onChange={formationChangeHandler} className="formation-selector">
                {formationsList.map((formation) => (
                    <option key={formation} value={formation}>
                        {formation}
                    </option>
                ))}
            </select>
            <Pitch />
            <div className="schema__actions">
                <button onClick={saveHandler}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default Schema;
