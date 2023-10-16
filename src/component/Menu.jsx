import React, { useState } from 'react';
import axios from 'axios';
import { Subfolder } from './Subfolder';

export const Menu = () => {
    const formatCategory = (label, index) => (
        <li className="deroulant" key={index}>
            <a href="#">{label}</a>
            <Subfolder />
        </li>
    );

    const [categories, setCategories] = useState([formatCategory('Tous', 0)]);

    axios
        .get('http://localhost:4000/categories')
        .then((result) => {
            if (result.data)
                setCategories([
                    formatCategory('Tous', 0), // Valeur par défault

                    // Formattage des données en retournée de l'API
                    ...result.data.map((c, index) =>
                        formatCategory(c.label, index + 1)
                    ),
                ]);
        })
        .catch((error) => console.log(error));

    return (
        <nav>
            <ul>{...categories}</ul>
        </nav>
    );
};
