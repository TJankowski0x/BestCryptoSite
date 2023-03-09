import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Axios } from 'axios';
import Nav from './components/Nav.jsx'
import Home from './Home.jsx'


const App = () => {

  return (
    <Router>
        <Nav />
          <div className="site-container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
      </Router>
  )
}

export default App
