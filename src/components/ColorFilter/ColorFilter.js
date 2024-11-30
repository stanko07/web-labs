import React from "react";

const ColorFilter = ({ selectedColor, onColorChange, colorOptions }) => {
    return (
        <select value={selectedColor} onChange={onColorChange} className="catalog-color-filter">
            {colorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default ColorFilter;
