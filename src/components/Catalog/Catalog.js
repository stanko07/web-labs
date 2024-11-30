import React, { useState, useEffect, useCallback } from "react";
import './Catalog.css'
import CatalogItems from "../Catalogitems/CatalogItems";
import SearchInput from "../SearchInput/SerchInput";
import SortSelect from "../SortSelect/SortSelect";
import ColorFilter from "../ColorFilter/ColorFilter";
import Spinner from "../Spinner/Spinner";
import { fetchFlowers } from "../../services/api";

const Catalog = () => {
    const [flowers, setFlowers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [inputValue, setInputValue] = useState(""); 
    const [sortType, setSortType] = useState("default");
    const [selectedColor, setSelectedColor] = useState("all");

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

    const loadFlowers = useCallback(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        setLoading(true);
        try {
            const data = await fetchFlowers(searchTerm, sortType, selectedColor);
            setFlowers(data);
        } catch (error) {
            setError("Не вдалося завантажити дані");
        } finally {
            setLoading(false);
        }
    }, [searchTerm, sortType, selectedColor]);

    useEffect(() => {
        loadFlowers();
    }, [searchTerm, sortType, selectedColor, loadFlowers]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchTerm(inputValue);
    };

    const handleResetClick = () => {
        setInputValue("");
        setSearchTerm("");
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    if (loading) return <Spinner />;

    if (error) return <p>{error}</p>;

    return (
        <div className="catalog-wrapper">
            <h1 className="catalog-title">Best Flowers</h1>
            <div className="catalog-filters">
                <SearchInput 
                    searchTerm={inputValue} 
                    onSearchChange={handleInputChange} 
                />
                <button onClick={handleSearchClick}>Пошук</button>
                <button onClick={handleResetClick}>Скасувати</button>
                <SortSelect sortType={sortType} onSortChange={handleSortChange} sortOptions={sortOptions} />
                <ColorFilter selectedColor={selectedColor} onColorChange={handleColorChange} colorOptions={colorOptions} />
            </div>
            <div className="flower-grid">
                {flowers.map((flower) => (
                    <CatalogItems
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
