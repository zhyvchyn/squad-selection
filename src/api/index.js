import {formations} from 'app-constants';
import {players} from 'testData';

const CURRENT_FORMATION_KEY = 'currentFormation';
const CURRENT_SQUAD_KEY = 'currentSquad';

export const getPlayers = () => new Promise((resolve) => setTimeout(() => resolve(players), 1000));

export const putStoreCurrentSquad = ({formation, squad}) => new Promise((resolve) => {
    localStorage.setItem(CURRENT_FORMATION_KEY, formation);
    localStorage.setItem(CURRENT_SQUAD_KEY, squad.join(','));

    setTimeout(() => resolve({formation, squad}), 1000);
});

export const getCurrentSquad = () => new Promise((resolve) => {
    const formation = localStorage.getItem(CURRENT_FORMATION_KEY) ?? formations.F442;
    const squad = (localStorage.getItem(CURRENT_SQUAD_KEY) ?? '').split(',').map((number) => !number ? null : number);

    setTimeout(() => resolve({formation, squad}), 1000);
});
