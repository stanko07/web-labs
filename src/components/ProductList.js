import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import flowerData from '../context/FloweContext'
import '../style/ProductList.css';



function ProductList() {
const [showAll, setShowAll] = useState(false);

const handleViewMore = () => {
    setShowAll(!showAll);
};


React.useEffect(() =>{
    console.log("Було показанов всі")
}, [showAll])

return (
    <div>
    <div className="product-list">
        {flowerData.slice(0, showAll ? flowerData.length : 4).map((product, index) => (
        <ProductCard key={index} {...product} />
        ))}
    </div>
    
    <div className="button-container">
        <button className="view-more-button" onClick={handleViewMore}>
        {showAll ? 'View Less' : 'View More'}
        </button>
    </div>
    </div>
);
}

export default ProductList;
