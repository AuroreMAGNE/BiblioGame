import React from 'react';

export const Search = () => (
    <form>
        <input
            type="text"
            name="text"
            className="search"
            placeholder="Recherchez ici"
        />
        <input type="submit" name="submit" className="submit" value="Search" />
    </form>
);
