import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Axios } from 'axios';
import Nav from './components/Nav';
import Home from './pages/Home';
import CryptoDetails from './pages/CryptoDetails';
import SearchResults from './pages/SearchResults';

const App = () => {
    return (
        <Router>
            <Nav />
            <div className="site-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:cryptoID" element={<CryptoDetails />} />
                    <Route path="/search/:searchValue" element={<SearchResults />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
