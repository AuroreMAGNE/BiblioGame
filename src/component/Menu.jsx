import React from 'react';
import { Subfolder } from './Subfolder';

export const Menu = () => (
    <nav>
        <ul>
            <li className="deroulant">
                <a href="#">Tous</a>
                <Subfolder />
            </li>
            <li>
                <a href="#">Carte</a>
                <Subfolder />
            </li>
            <li>
                <a href="#">Stratégie</a>
                <Subfolder />
            </li>
            <li>
                <a href="#">Lettre</a>
                <Subfolder />
            </li>
            <li>
                <a href="#">Hasard</a>
                <Subfolder />
            </li>
            <li>
                <a href="#">Adresse</a>
                <Subfolder />
            </li>
            <li>
                <a href="#">Coopératif</a>
                <Subfolder />
            </li>
            <li>
                <a href="#">Ambiance</a>
                <Subfolder />
            </li>
        </ul>
    </nav>
);
