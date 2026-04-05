import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import flo_friends from "./img/florence_and_friends.jpg";
import tourism from "./img/Tourism.jpg";

import PrototypeCard from "./PrototypeCard";
export function Home() {
  const navigate = useNavigate();

  const styles = {
    // ---------------- HERO ----------------
    hero: {
      position: "relative",
      width: "100%",
      height: "calc(100vh)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      textAlign: "center",
      padding: "0 16px",
    },

    heroBg: {
      position: "absolute",
      inset: 0,
      background: `url(${flo_friends}) center/cover no-repeat`, // ✅ use your image
      transform: "scale(1.05)",
      zIndex: 0,
    },

    heroOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.75))", // ✅ cleaner, softer
      zIndex: 1,
    },

    heroContent: {
      position: "relative",
      zIndex: 2,
      color: "white",
      maxWidth: 900,
      margin: "0 auto",
    },

    heroTitle: {
      fontFamily: "'EB Garamond', serif",
      fontWeight: 500,
      fontSize: "clamp(52px, 10vw, 110px)", // 🔥 bigger mobile presence
      lineHeight: 1.05,
      letterSpacing: "-1px",
      textShadow: "0 12px 50px rgba(0,0,0,0.7)",
      margin: 0,
    },

    heroSubtitle: {
      marginTop: 18,
      fontSize: "clamp(14px, 3vw, 20px)",
      color: "rgba(255,255,255,0.85)",
    },

    // ---------------- CARDS ----------------
    cardSection: (dark) => ({
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "48px 16px",
      background: dark ? "#e6ee01ff" : "#fbff85ff",
    }),

    card: {
      width: "100%",
      maxWidth: 1000,

      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",

      gap: 28,
      padding: 24,

      borderRadius: 20,
      boxSizing: "border-box",
      margin: "0 auto",

      background: "rgba(255,255,255)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
    },

    cardDark: {
      background: "#1a1a1a",
      color: "white",
    },

    cardText: {
      flex: "1 1 320px",
      maxWidth: 480,
    },

    cardMedia: {
      flex: "1 1 320px",
      maxWidth: 480,
      width: "100%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    matchedImage: {
      width: "100%",
      maxWidth: 420,
      height: 250,
      objectFit: "cover",
      borderRadius: 12,
    },

    // ---------------- NAVBAR ----------------
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: 70,

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      padding: "0 20px",
      boxSizing: "border-box",

      background: "rgba(0,0,0,0.35)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
    },

    navTop: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },

    brandTitle: {
      color: "white",
      fontSize: 20,
      fontWeight: 500,
      fontFamily: "'EB Garamond', serif",
    },

    navLinks: {
      display: "flex",
      gap: 20,
    },

    // ---------------- MOBILE ----------------
    mobile: {
      heroTitle: {
        fontSize: "clamp(44px, 12vw, 72px)", // 🔥 strong mobile hero
      },

      heroSubtitle: {
        fontSize: "clamp(13px, 4vw, 18px)",
      },

      card: {
        flexDirection: "column",
        gap: 20,
        padding: 20,
        width: "92%",
      },

      cardText: {
        maxWidth: "100%",
        textAlign: "center",
      },

      cardMedia: {
        maxWidth: "100%",
      },

      matchedImage: {
        height: 200,
      },

      navTop: {
        flexDirection: "column",
        gap: 6,
      },

      navLinks: {
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        marginTop: 10,
      },
    },
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column", // ✅ CRITICAL FIX
        alignItems: "center", // centers sections horizontally
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {/* ---------------- HERO ---------------- */}
      <section
        style={{
          ...styles.hero,
          width: "100%",
          scrollSnapAlign: "start",
        }}
      >
        <div style={styles.heroBg}></div>
        <div style={styles.heroOverlay}></div>

        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.heroTitle}>
            We Bring <br />
            Communities <br />
            Together
          </h1>

          <p style={styles.heroSubtitle}>
            Designing digital experiences that connect people and places.
          </p>
        </motion.div>
      </section>

      {/* ---------------- CONSULTING ---------------- */}
      <section
        style={{
          ...styles.cardSection(false),
          width: "100%",
          scrollSnapAlign: "start",
        }}
      >
        <motion.div style={styles.card} whileHover={{ scale: 1.02 }}>
          <div style={styles.cardText}>
            <h3 style={{ fontSize: 24 }}>Consulting</h3>
            <h2 style={{ fontSize: 28 }}>Design Systems & Platforms</h2>
            <p style={{ fontSize: 20 }}>
              We build modern, scalable platforms that showcase expertise and
              drive real-world impact.
            </p>
          </div>

          <div style={styles.cardMedia}>
            <PrototypeCard />
          </div>
        </motion.div>
      </section>

      {/* ---------------- PRODUCT ---------------- */}
      <section
        style={{
          ...styles.cardSection(true),
          width: "100%",
          scrollSnapAlign: "start",
        }}
      >
        <motion.div
          style={{
            ...styles.card,
            flexDirection: "row-reverse",
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={styles.cardMedia}>
            <img src={tourism} alt="Townscape" style={styles.matchedImage} />
          </div>

          <div style={styles.cardText}>
            <h3 style={{ fontSize: 24 }}>Product</h3>
            <h2 style={{ fontSize: 28 }}>Townscape.ca</h2>
            <p style={{ fontSize: 20 }}>
              Helping communities grow through visibility, connection, and
              digital presence.
            </p>

            <button onClick={() => navigate("/products")}>Learn More</button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
