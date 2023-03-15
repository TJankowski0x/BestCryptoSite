import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Axios } from 'axios';
import Nav from './components/Nav';
import Home from './pages/Home';
import CryptoDetails from './pages/CryptoDetails';

const App = () => {
    return (
        <Router basename="/BestCryptoSite">
            <Nav />
            <div className="site-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:cryptoID" element={<CryptoDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
