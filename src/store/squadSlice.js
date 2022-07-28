import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getCurrentSquad, getPlayers, putStoreCurrentSquad} from 'api';
import {formations} from 'app-constants';

const initialState = {
    players: [],
    currentSquad: [],
    currentFormation: formations.F442
};

export const loadPlayersList = createAsyncThunk('squad/loadPlayersList', () => getPlayers());

export const saveCurrentSquad = createAsyncThunk(
    'squad/saveCurrentSquad',
    (squadInfo) => putStoreCurrentSquad(squadInfo)
);

export const loadCurrentSquad = createAsyncThunk('squad/loadCurrentSquad', () => getCurrentSquad());

const squadSlice = createSlice({
    name: 'squad',
    initialState,
    reducers: {
        setCurrentFormation: (state, action) => {
            state.currentFormation = action.payload;
        },
        addPlayerToSquad: (state, action) => {
            const {index, number} = action.payload;
            const currentSquad = [...state.currentSquad];
            const restoredCurrentSquad = Array.from({length: 11}).map((item, index) => currentSquad[index] ?? null);

            state.currentSquad = restoredCurrentSquad.map((currentSquadPlayerNumber, currentSquadIndex) => {
                if (currentSquadIndex === index) {
                    return number;
                } else if (currentSquadPlayerNumber === number) {
                    return null;
                } else {
                    return currentSquadPlayerNumber;
                }
            });
        }
    },
    extraReducers: {
        [loadPlayersList.fulfilled]: (state, action) => {
            state.players = action.payload;
        },
        [saveCurrentSquad.fulfilled]: (state, action) => {
            const {formation, squad} = action.payload;

            state.currentFormation = formation;
            state.currentSquad = squad;
        },
        [loadCurrentSquad.fulfilled]: (state, action) => {
            const {formation, squad} = action.payload;

            state.currentFormation = formation;
            state.currentSquad = squad;
        }
    }
});

export const {setCurrentFormation, addPlayerToSquad} = squadSlice.actions;

export const playersListSelector = (state) => state.squad.players;
export const currentSquadSelector = (state) => state.squad.currentSquad;
export const currentFormationSelector = (state) => state.squad.currentFormation;

export default squadSlice.reducer;
