import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Board from './Pages/Board';
import Greeting from './Pages/Greetings';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/tictactoe">TicTacToe</Link>
            </li>
            <li>
              <Link to="/greetings">Greeting</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tictactoe" element={<Board />} />
          <Route path='/greetings' element={<Greeting/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
