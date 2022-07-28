import React from 'react';
import {useDispatch} from 'react-redux';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {loadCurrentSquad, loadPlayersList} from 'store/squadSlice';
import Schema from 'components/Schema';
import PlayersList from 'components/PlayersList';

import './App.css';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadPlayersList());
        dispatch(loadCurrentSquad());
    }, [dispatch]);

    return (
        <div className="app">
            <DndProvider backend={HTML5Backend}>
                <Schema />
                <PlayersList />
            </DndProvider>
        </div>
    );
}

export default App;
