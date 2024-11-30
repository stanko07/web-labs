import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeaturedSection from './components/FeaturedSection';
import FlowerShop from './components/AboutUs';
import Footer from './components/Footer';

function App() {
return (
    <div>
        <Navbar />
        <Header />
        <FeaturedSection />
        <FlowerShop/>
        <Footer/>
    </div>
);
}

export default App;