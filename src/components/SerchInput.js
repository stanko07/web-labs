import React from "react";

const SearchInput = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search by name or description"
            value={searchTerm}
            onChange={onSearchChange}
            className="catalog-search"
        />
    );
};

export default SearchInput;
