import React from 'react';

export const Menu = () => (
    <nav>
        <ul>
            <li className="deroulant">
                <a href="#">Tous</a>
                <ul className="sous">
                    <li>
                        <a href="#">de 0 à 3 ans</a>
                    </li>
                    <li>
                        <a href="#">de 3 à 6 ans</a>
                    </li>
                    <li>
                        <a href="#">de 6 à 10 ans</a>
                    </li>
                    <li>
                        <a href="#">au-delà de 10 ans</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Carte</a>
            </li>
            <li>
                <a href="#">Stratégie</a>
            </li>
            <li>
                <a href="#">Lettre</a>
            </li>
            <li>
                <a href="#">Hasard</a>
            </li>
            <li>
                <a href="#">Adresse</a>
            </li>
            <li>
                <a href="#">Coopératif</a>
            </li>
            <li>
                <a href="#">Ambiance</a>
            </li>
        </ul>
    </nav>
);
