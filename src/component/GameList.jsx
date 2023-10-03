import React from 'react';
import { GameRecap } from './GameRecap';
import { Search } from './Search';

export const GameList = () => (
    <>
        <Search />
        <div style={{ display: 'flex', maxWidth: '100%' }}>
            <GameRecap />
            <GameRecap />
            <GameRecap />
            <GameRecap />
            <GameRecap />
            <GameRecap />
        </div>
    </>
);
