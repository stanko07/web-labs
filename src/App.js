import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FeaturedSection from './components/FeaturedSection/FeaturedSection';
import Catalog from './components/Catalog/Catalog';
import FlowerShop from './components/AboutUs/AboutUs';
import MoreFlowers from './components/MoreFlowers/MoreFlowers';
import CartPage from './components/CartPage/CartPage'; // Імпортуємо Cart
import { FlowersProvider } from './context/FloweContext';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <FlowersProvider>
                    <Routes>
                        {/* Головна сторінка */}
                        <Route 
                            path="/" 
                            element={
                                <>
                                    <Header />
                                    <FeaturedSection />
                                    <FlowerShop />
                                </>
                            } 
                        />
                        <Route path="/home" element={<Header />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/flower/:id" element={<MoreFlowers />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </FlowersProvider>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
