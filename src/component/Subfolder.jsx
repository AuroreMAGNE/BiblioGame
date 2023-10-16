import React from 'react';
import axios from 'axios';

export const Subfolder = () => {
    /*const formatAgeCategory = (label, index) => (
        <li key={index}>
            <a href="#">{label}</a>
        </li>
    );

    const [ageCategories, setAgeCategories] = useState([]);

    axios
        .get('http://localhost:4000/agecategories')
        .then((result) => {
            if (result.data)
                setAgeCategories(
                    result.data.map((c, index) =>
                        formatAgeCategory(c.label, index + 1)
                    )
                );
        })
        .catch((error) => console.log(error));*/

    return (
        <>
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
        </>
    );
};
