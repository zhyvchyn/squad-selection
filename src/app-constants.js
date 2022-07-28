export const roles = {
    GK: 'gk',
    DF: 'df',
    MF: 'mf',
    FW: 'fw'
};

export const lineByRole = {
    [roles.GK]: 0,
    [roles.DF]: 1,
    [roles.MF]: 2,
    [roles.FW]: 3
};

export const selectionQuality = {
    NONE: 'none',
    BAD: 'bad',
    GOOD: 'good'
};

export const formations = {
    F433: '4-3-3',
    F442: '4-4-2',
    F532: '5-3-2'
};

export const formationsList = [formations.F433, formations.F442, formations.F532];

export const dndTypes = {
    ADD_PLAYER: 'add_player'
};
