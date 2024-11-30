import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import FeaturedSection from './components/FeaturedSection';
import Catalog from './components/Catalog';
import FlowerShop from './components/AboutUs';
import MoreFlowers from './components/MoreFlowers';
import { FlowersProvider } from './context/FloweContext';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <FlowersProvider>
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
                        <Route path="/home" element={<Header />}
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
                </FlowersProvider>
                <Routes>
                    <Route path="/" element={<Footer />} />
                    <Route path="/catalog" element={<Footer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
