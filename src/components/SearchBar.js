import React from 'react';

const SearchBar = ({ query, setQuery }) => {
    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="p-2 border rounded w-full"
        />
    );
};

export default SearchBar;