import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Row, Grid, Col, Card, Image } from "antd";
import './styles.css';
import './index.css';
import './img/cabo.jpg'
import flo_friends from './img/florence_and_friends.jpg'


import Gallery from './Gallery';


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import './styles.css';
const { Meta } = Card;
function App() {
  return (
    <Router basename="/florence-art-portfolio" >
      <div className="app-container">
        {/* Navbar */}
        <header className="navbar">
          <nav className="nav-inner">
            <span className="brand">✨ Florence A. Art</span>
            <div className="nav-links">
              <NavItem path="/florence-art" label="Home" />
              <NavItem to="/shop" label="Shop" />
              <NavItem to="/faq" label="FAQ" />
            </div>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/florence-art" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <footer className="footer">
          © 2025 Florence's Art
        </footer>
      </div>
    </Router>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "nav-item active" : "nav-item"
      }
    >
      {label}
    </NavLink>
  );
}

function Home() {
  const images = Array.from({ length: 12 }).map((_, i) => ({
    src: `https://picsum.photos/300/300?random=${i}`,
    title: `Artwork ${i + 1}`,
  }));

  return (
    //switch these columns to collapse or ontop of eachother on mobile
    <div className="home-container">
      <div className="about-section">
        {/* Text Side */}
        <div className="about-text">
          <h3>About Me 👩🏼‍💻👩🏼‍🎨 🏃🏼‍♀️</h3>
          <p>Coder by Day, Artist by Night - Runner in Between.</p>
          <h4>
            Hi! My name is Florence! 🌲 From city streets to mountain peaks!
            Hiking trails, alpine views, and crisp mountain air fuel my creativity—
            turning every adventure into nature-inspired paintings.
          </h4>
        </div>

        {/* Image Side */}
        <div className="about-image">
          <img src={flo_friends} alt="Florence and Friends" />
        </div>
      </div>



      {/* <section className="section community">
        <h2>Community Message</h2>
        <p>"Art is a bridge between souls. Let’s weave magic together."</p>
      </section> */}

      <section className="section gallery">
        <h2>Gallery</h2>
        <Gallery />
      </section>
    </div >
  );
}

function Shop() {
  return <div className="page-message">Shop Page (coming soon)</div>;
}

function FAQ() {
  return <div className="page-message">FAQ Page (coming soon)</div>;
}

export default App;
