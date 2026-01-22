import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Row, Grid, Col, Divider, Button } from "antd";

import "./styles.css";
import "./index.css";
import "./img/cabo.jpg";
import tourism from "./img/Tourism.jpg";

import flo_friends from "./img/florence_and_friends.jpg";
import ebc_logo from "./img/EBC_logo.png";

import gc_logo from "./img/GC_logo.jpeg";
import { Services } from "./Services";
import PrivacyPolicy from "./Policies/PrivacyPolicy";
import CookiesPolicy from "./Policies/CookiesPolicy";
import AppFooter from "./AppFooter";
import Products from "./Products";

function App() {
  return (
    <Router basename="/">
      <div className="app-container">
        {/* Navbar */}
        <header className="navbar">
          <div className="nav-top">
            <img
              style={{ height: "40px", width: "40px" }}
              src={ebc_logo}
              alt="EBC Logo"
            />
            <h1 className="brand-title">Early Brew Cache Inc.</h1>
          </div>
          <Divider style={{ marginBottom: "4px", marginTop: "10px" }} />
          <nav className="nav-links">
            <NavItem to="/" label="Home" />
            <NavItem to="/products" label="Products" />
            <NavItem to="/services" label="Services" />
            {/* <NavItem to="/case-studies" label="Case Studies" /> */}
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
          </Routes>
        </main>

        <Divider />

        <AppFooter />
      </div>
    </Router>
  );
}

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

function Home() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const sm = screens.sm && !screens.md;
  const md = screens.md && !screens.lg;
  const lg = screens.lg && !screens.xl;

  const screensSize = {
    xs: {
      floAndFriends: "80vw",
      missionFontSize: "25px",
      heroTitleFontSize: "25px",
      carouselHeight: "90vh",
    },
    sm: {
      floAndFriends: "80vw",
      missionFontSize: "25px",
      heroTitleFontSize: "25px",
      carouselHeight: "95vh",
    },
    md: {
      floAndFriends: "45vw",
      missionFontSize: "25px",
      heroTitleFontSize: "35px",
      carouselHeight: "65vh",
    },
    lg: {
      floAndFriends: "45vw",
      missionFontSize: "35px",
      heroTitleFontSize: "45px",
      carouselHeight: "75vh",
    },
    xl: {
      floAndFriends: "45vw",
      missionFontSize: "40px",
      heroTitleFontSize: "45px",
      carouselHeight: "75vh",
    },
  };

  const getScreenSize = (componentName) => {
    // Determine which breakpoint is active
    if (screens.xl) return screensSize.xl[componentName];
    if (screens.lg) return screensSize.lg[componentName];
    if (screens.md) return screensSize.md[componentName];
    if (screens.sm) return screensSize.sm[componentName];
    if (screens.xs) return screensSize.xs[componentName];
    // Fallback
    return "100%";
  };

  return (
    //switch these columns to collapse or ontop of eachother on mobile
    <div style={{ width: "100%" }}>
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
        {/* Background image */}
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

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))",
            zIndex: 1,
          }}
        />

        {/* Foreground content */}
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
          {/* <Paragraph
            style={{
              color: "white",
              fontSize: 18,
              // maxWidth: 600,
              textShadow: "1px 1px 6px rgba(0,0,0,0.7)",
            }}
          >
            Combining business insight with technical excellence to deliver
            solutions that truly make an impact.
          </Paragraph> */}
        </div>
        <Row
          gutter={0} // no spacing between columns
          align="middle"
          justify="center"
          style={{
            width: "100%",
            margin: 0,
            padding: "1rem 0",
            fontFamily: "EB Garamond, serif",
            zIndex: 2,
          }}
        >
          {/* Left: Text */}
          <Col xs={24} sm={24} md={12} lg={12}>
            <div
              style={{
                textAlign: "left",
                // fontFamily: "Georgia, Times, serif", // serif font
                padding: "1rem",
                justifyContent: "flex-start", // aligns text to top
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // aligns text to top
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: getScreenSize("missionFontSize"),
                  color: "#f1e0e0ff",
                }}
              >
                Developing technology that bridges communities, facilitating
                meaningful connections and collaboration across diverse
                networks.
                {/* , attract visitors, and strengthen community ties. */}
                {/* We want to make our city’s online presence stronger, helping local shops and services succeed in today’s digital world. */}
              </h3>
              <p style={{ margin: "0.5rem 0 0 0" }}></p>
            </div>
          </Col>

          {/* Right: Image */}
          <Col xs={21} sm={21} md={12} lg={12}>
            <img
              src={flo_friends}
              alt="Florence and Friends"
              style={{
                width: getScreenSize("floAndFriends"), // fills the column width
                height: "2%", // fills column height (may crop if using objectFit)
                objectFit: "cover", // ensures image covers area without distortion
                display: "block",
              }}
            />
          </Col>
        </Row>
      </div>
      <Row
        gutter={0} // no spacing between columns
        align="middle"
        justify="center"
        style={{
          width: "100%",
          margin: 0,
          padding: "1rem 0",
          fontFamily: "EB Garamond, serif",
          zIndex: 2,
        }}
      >
        <Col xs={24} sm={24} md={12} lg={12}>
          <div class="product-intro">
            <h3 class="product-kicker">Our Product</h3>
            <h1 class="product-title">TOWNSCAPE</h1>
            <div class="mission-text">
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
            </div>{" "}
            <Button
              style={{ marginBottom: 60, textAlign: "center" }}
              type="primary"
              onClick={() => window.open("products", "_blank")}
            >
              {"More Info"}
            </Button>
          </div>
        </Col>
        <Col xs={21} sm={21} md={12} lg={12}>
          {" "}
          <div class="hover-image">
            <img src={tourism} alt="Townscape community preview" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
