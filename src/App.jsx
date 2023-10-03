import React from 'react';
import { GameList } from './component/GameList';
import { Menu } from './component/Menu';

export const App = () => (
    <>
        <h1>BiblioGame</h1>
        <div>
            <Menu />
            <GameList />
        </div>
    </>
);
