import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import Nav from './components/Nav'
import './CSS/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  )
}

export default App
