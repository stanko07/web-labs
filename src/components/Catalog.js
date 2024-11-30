import React, { useContext, useState } from "react";
import '../style/Catalog.css';

import Catalogitems from "../components/CatalogItems";
import { FlowerContext } from "../context/FloweContext";
import SearchInput from "../components/SerchInput";
import SortSelect from "../components/SortSelect";
import ColorFilter from "../components/ColorFilter";

const Catalog = () => {
    const { flowers } = useContext(FlowerContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");
    const [selectedColor, setSelectedColor] = useState("all");

    const colorMap = {
        green: '#228B22',
        pink: '#FF69B4',
        red: '#E52B50'
    };

    const sortOptions = [
        { value: "default", label: "Sort by Price" },
        { value: "asc", label: "Price: Low to High" },
        { value: "desc", label: "Price: High to Low" }
    ];

    const colorOptions = [
        { value: "all", label: "All Colors" },
        { value: "green", label: "Green" },
        { value: "pink", label: "Pink" },
        { value: "red", label: "Red" }
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const filteredFlowers = flowers
        .filter((flower) => {
            const matchesSearch = flower.name && flower.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesColor = selectedColor === "all" || flower.colors.includes(colorMap[selectedColor]);
            return matchesSearch && matchesColor;
        })
        .sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));

            if (sortType === "asc") {
                return priceA - priceB;
            } else if (sortType === "desc") {
                return priceB - priceA;
            } else {
                return 0;
            }
        });

    return (
        <div className="catalog-wrapper">
            <h1 className="catalog-title">Best Flowers</h1>

            <div className="catalog-filters">
                <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                <SortSelect sortType={sortType} onSortChange={handleSortChange} sortOptions={sortOptions} />
                <ColorFilter selectedColor={selectedColor} onColorChange={handleColorChange} colorOptions={colorOptions} />
            </div>

            <div className="flower-grid">
                {filteredFlowers.map((flower) => (
                    <Catalogitems
                        key={flower.id}
                        id={flower.id}
                        image={flower.image}
                        name={flower.name}
                        price={flower.price}
                        colors={flower.colors}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
