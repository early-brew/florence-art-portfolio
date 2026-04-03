import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PrototypeCard from "./PrototypeCard";
import tourism from "./img/Tourism.jpg";

function Home() {
  const navigate = useNavigate();

  const heroStyle = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 70px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  const heroBg = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: 'url("./img/GC_logo.jpeg") center/cover no-repeat',
    backgroundSize: "cover",
    transform: "scale(1.05)",
    zIndex: 0,
  };

  const heroOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at center, rgba(0,0,0,0.4), rgba(0,0,0,0.85)), linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9))",
    zIndex: 1,
  };

  const heroContent = {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 20px",
    color: "white",
  };

  const heroTitle = {
    fontFamily: "'EB Garamond', serif",
    fontWeight: 500,
    fontSize: "clamp(48px, 9vw, 110px)",
    lineHeight: 1.05,
    letterSpacing: "-1px",
    textShadow: "0 10px 40px rgba(0,0,0,0.6)",
    margin: 0,
  };

  const heroSubtitle = {
    marginTop: 20,
    fontSize: "clamp(14px, 2vw, 20px)",
    color: "rgba(255,255,255,0.75)",
  };

  const cardSection = (dark) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
    width: "100%",
    scrollSnapAlign: "start",
    background: dark ? "#1a1a1a" : "rgba(255,255,255,0.85)",
    color: dark ? "white" : "black",
  });

  const card = {
    display: "flex",
    gap: 60,
    alignItems: "center",
    maxWidth: 1000,
    width: "90%",
    borderRadius: 20,
    padding: 40,
    boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
  };

  const cardText = {
    flex: 1,
  };

  const cardMedia = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const matchedImage = {
    width: "100%",
    maxWidth: 1000,
    height: 250,
    objectFit: "cover",
    borderRadius: 12,
  };

  return (
    <div
      style={{
        width: "100vw",
        overflowX: "hidden",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {/* HERO */}
      <section style={heroStyle}>
        <div style={heroBg}></div>
        <div style={heroOverlay}></div>
        <motion.div
          style={heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={heroTitle}>
            We Bring <br />
            Communities <br />
            Together
          </h1>
          <p style={heroSubtitle}>
            Designing digital experiences that connect people and places.
          </p>
        </motion.div>
      </section>

      {/* CONSULTING CARD */}
      <section style={cardSection(false)}>
        <motion.div style={card} whileHover={{ scale: 1.02 }}>
          <div style={cardText}>
            <h3>Consulting</h3>
            <h2>Design Systems & Platforms</h2>
            <p>
              We build modern, scalable platforms that showcase expertise and
              drive real-world impact.
            </p>
          </div>
          <div style={cardMedia}>
            <PrototypeCard />
          </div>
        </motion.div>
      </section>

      {/* PRODUCT CARD */}
      <section style={cardSection(true)}>
        <motion.div
          style={{ ...card, flexDirection: "row-reverse" }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={cardMedia}>
            <img src={tourism} alt="Townscape" style={matchedImage} />
          </div>
          <div style={cardText}>
            <h3>Product</h3>
            <h2>Townscape</h2>
            <p>
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

export default Home;
