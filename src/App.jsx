import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Axios } from 'axios';
import Nav from './components/Nav'
import Home from './Home'
import './CSS/App.scss'


function App() {

  return (
    <div className="app">
      <Router>
        <Nav />
          <div className="site-container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
    </div>
  )
}

export default App
