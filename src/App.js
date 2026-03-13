import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { Row, Grid, Col, Divider, Button } from "antd";

import "./styles.css";
import "./index.css";

import tourism from "./img/Tourism.jpg";
import flo_friends from "./img/florence_and_friends.jpg";
import ebc_logo from "./img/EBC_logo.png";
import gc_logo from "./img/GC_logo.jpeg";

import Products from "./Products";
import { Services } from "./Services";
import PrivacyPolicy from "./Policies/PrivacyPolicy";
import CookiesPolicy from "./Policies/CookiesPolicy";
import AppFooter from "./AppFooter";

// -------------------
// Navbar link component
function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
    >
      {label}
    </NavLink>
  );
}

// -------------------
// Home page
function Home() {
  const { useBreakpoint } = Grid;
  const navigate = useNavigate();
  const screens = useBreakpoint();

  const screensSize = {
    xs: {
      floAndFriends: "80vw",
      heroTitleFontSize: "25px",
      carouselHeight: "90vh",
    },
    sm: {
      floAndFriends: "80vw",
      heroTitleFontSize: "25px",
      carouselHeight: "95vh",
    },
    md: {
      floAndFriends: "45vw",
      heroTitleFontSize: "35px",
      carouselHeight: "65vh",
    },
    lg: {
      floAndFriends: "45vw",
      heroTitleFontSize: "45px",
      carouselHeight: "75vh",
    },
    xl: {
      floAndFriends: "45vw",
      heroTitleFontSize: "45px",
      carouselHeight: "75vh",
    },
  };

  const getScreenSize = (componentName) => {
    if (screens.xl) return screensSize.xl[componentName];
    if (screens.lg) return screensSize.lg[componentName];
    if (screens.md) return screensSize.md[componentName];
    if (screens.sm) return screensSize.sm[componentName];
    if (screens.xs) return screensSize.xs[componentName];
    return "100%";
  };

  return (
    <div style={{ width: "100%" }}>
      {/* Hero section */}
      <div
        style={{
          position: "relative",
          height: getScreenSize("carouselHeight"),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: `url(${gc_logo}) center/cover`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6))",
            zIndex: 1,
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              color: "white",
              marginBottom: 10,
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
              fontSize: getScreenSize("heroTitleFontSize"),
              fontFamily: "'EB Garamond', serif",
            }}
          >
            {"We Bring People and Communities Together"}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <Row
        gutter={0}
        align="middle"
        justify="center"
        style={{
          width: "100%",
          margin: 0,
          padding: "1rem 0",
          fontFamily: "EB Garamond, serif",
        }}
      >
        <Col xs={24} sm={24} md={12} lg={12}>
          <div className="product-intro">
            <h3 className="product-kicker">Our Product</h3>
            <h1 className="product-title">TOWNSCAPE</h1>
            <div className="mission-text">
              <p>
                We bring communities online by creating beautiful, accessible
                websites that help local businesses stand out and connect with
                their audience.
              </p>
              <p>
                Our approach celebrates local identity, strengthens community
                bonds, and keeps technology human-centered.
              </p>
              <p>
                By making it easy to be discovered online, we help businesses
                grow visibility, engagement, and trust.
              </p>
            </div>
            <Button type="primary" onClick={() => navigate("/products")}>
              More Info
            </Button>
          </div>
        </Col>
        <Col xs={21} sm={21} md={12} lg={12}>
          <div className="hover-image">
            <img src={tourism} alt="Townscape community preview" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

// -------------------
// Catch all component to render pages based on pathname
function CatchAll() {
  const path = window.location.pathname.toLowerCase();

  if (path.startsWith("/products")) return <Products />;
  if (path.startsWith("/services")) return <Services />;
  if (path.startsWith("/privacy-policy")) return <PrivacyPolicy />;
  if (path.startsWith("/cookies-policy")) return <CookiesPolicy />;

  return <Home />;
}

// -------------------
// App component
function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-top">
          <img
            style={{ height: 40, width: 40 }}
            src={ebc_logo}
            alt="EBC Logo"
          />
          <h1 className="brand-title">Early Brew Cache Inc.</h1>
        </div>
        <Divider style={{ marginBottom: 4, marginTop: 10 }} />
        <nav className="nav-links">
          <NavItem to="/" label="Home" />
          <NavItem to="/products" label="Products" />
          <NavItem to="/services" label="Services" />
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="*" element={<CatchAll />} />
        </Routes>
      </main>

      <Divider />
      <AppFooter />
    </div>
  );
}

export default App;
