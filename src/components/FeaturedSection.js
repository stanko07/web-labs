import React from 'react';
import ProductList from './ProductList';
import '../style/FeaturedSection.css';

function FeaturedSection() {
return (
    <div className="container3">
    <section className="featured-section">
    <div className="featured-header">
        <h2 className='featured'>Featured</h2>
    </div>
    <ProductList />
    <button className="scroll-arrow">→</button>
    </section>
    </div>
);
}

export default FeaturedSection;
