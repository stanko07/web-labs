import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import FeaturedSection from './components/FeaturedSection';
import Catalog from './components/Catalog';
import FlowerShop from './components/AboutUs';
import MoreFlowers from './components/MoreFlowers';
import { FLowersProvider } from './context/FloweContext';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <FLowersProvider>
                    <Routes>
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
                        <Route path="/catalog" element={<Catalog />} />
                        <Route 
                            path="/flower/:id" 
                            element={
                                <>
                                    <MoreFlowers />
                                </>
                            } 
                        />
                    </Routes>
                </FLowersProvider>
                <Routes>
                    <Route path="/" element={<Footer />} />
                    <Route path="/catalog" element={<Footer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
