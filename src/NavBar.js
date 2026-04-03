import { useState, useEffect } from "react";
import ebc_logo from "./img/EBC_logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "rgba(0,0,0,0.35)",
    backdropFilter: "blur(12px)",
    zIndex: 1000,

    display: "flex",
    justifyContent: "center", // 🔥 centers inner container
  };

  const brandTitle = {
    color: "white",
    fontSize: isMobile ? 18 : 24,
    fontWeight: 500,
    letterSpacing: 0.5,
    fontFamily: "'EB Garamond', serif",
    whiteSpace: "nowrap",
  };

  const navInner = {
    width: "100%",
    maxWidth: 1200,
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // stack navTop + navLinks on mobile
    alignItems: isMobile ? "flex-start" : "center",
    justifyContent: "space-between",
    padding: isMobile ? "10px 20px" : "0 40px",
  };

  const navTop = {
    display: "flex",
    alignItems: "center",
    gap: 12,
  };

  const navLinks = {
    display: "flex",
    flexDirection: "row", // always side by side
    gap: 20,
    flexWrap: "wrap", // wrap if too wide on small screens
    marginTop: isMobile ? 10 : 0, // moves below navTop on mobile
  };

  return (
    <header style={navbarStyle}>
      <div style={navInner}>
        <div style={navTop}>
          <img src={ebc_logo} alt="EBC Logo" style={{ height: 40 }} />
          <h1 style={brandTitle}>Early Brew Cache Inc.</h1>
        </div>

        <nav style={navLinks}>
          <NavItem to="/" label="Home" />
          <NavItem to="/products" label="Products" />
          <NavItem to="/services" label="Services" />
        </nav>
      </div>
    </header>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "white" : "rgba(255,255,255,0.7)",
        textDecoration: "none",
        fontSize: 14,
      })}
    >
      {label}
    </NavLink>
  );
}

export default Navbar;
