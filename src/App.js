import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-content">
            <div className="site-info">
              <h1 className="site-title">ezytickets.in</h1>
              <p className="tagline">Tickets Made Easy, Memories Made Forever</p>
            </div>
            <nav className="nav">
              <Link to="/" className="nav-link">Home</Link>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="main-container">
                <h2 className="main-message">Good things are brewing...</h2>
                <p className="description">We’re working hard behind the scenes to bring you something awesome. Stay tuned!</p>
              </div>
            } />
          </Routes>
        </main>

        <footer className="footer">
          <p>Made for Fans, by Fans</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
