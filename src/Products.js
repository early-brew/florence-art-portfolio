import React from "react";
import { Row, Col, Divider, Button } from "antd";
import { motion } from "framer-motion"; // ✅ import framer-motion
import coffee from "./img/CoffeeHut.jpg";
import announcements from "./img/Announcements.jpg";
import tourism from "./img/Tourism.jpg";
import maintenance from "./img/Maintenance.jpg";

const partnerProducts = [
  {
    id: 1,
    title: "Feature Your Business",
    description:
      "Showcase products and services beautifully online Professional website styling that reflects your business personality",
    image: coffee,
    ctaText: "Join Now",
    ctaLink: "/partner-signup",
  },
  {
    id: 2,
    title: "Community Based Features",
    description:
      "Post business announcements and connect with other businesses on the town main page to attract customers",
    image: announcements,
    ctaText: "Learn More",
    ctaLink: "/partner-signup",
  },
  {
    id: 3,
    title: "Maintenance & Support",
    description:
      "Tiered plans to suit every business size, regular updates and security maintenance, and dedicated support for ongoing growth",
    image: maintenance,
    ctaText: "Discover More",
    ctaLink: "/partner-signup",
  },
  {
    id: 4,
    title: "Tourism",
    description:
      "Highlight that the town offers attractions, amenities, and essential services. Provide links to neighboring towns and regional options. Encourage visitors to extend their stay with compelling overnight reasons.",
    image: tourism,
    ctaText: "Discover More",
    ctaLink: "/partner-signup",
  },
];

const styles = {
  container: {
    textAlign: "center",
    paddingTop: 100,
    paddingBottom: 50,
    maxWidth: 1200,
    margin: "0 auto",
  },
  heroSection: { marginBottom: 40 },
  heroTitle: {
    fontSize: "clamp(36px, 6vw, 60px)",
    fontWeight: 600,
    marginBottom: 16,
  },
  heroText: {
    fontSize: "clamp(14px, 2vw, 18px)",
    color: "#555",
    maxWidth: 800,
    margin: "0 auto 20px",
    lineHeight: 1.5,
  },
  heroButton: { marginBottom: 60 },

  productRow: { marginBottom: 40, display: "flex", alignItems: "center" },
  productCol: { padding: "0 10px" },
  productCard: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    background: "white",
    borderRadius: 15,
    padding: 16,
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    cursor: "pointer",
  },
  productImage: {
    width: "100%",
    height: "auto",
    borderRadius: 12,
    objectFit: "cover",
    maxHeight: 400,
  },
  productTitle: { fontSize: "1.8rem", marginBottom: 10, marginTop: 0 },
  productDescription: { fontSize: "1.1rem", color: "#555", lineHeight: 1.6 },
  divider: { margin: "30px 0" },

  // MOBILE
  "@media(max-width:768px)": {
    heroTitle: { fontSize: "clamp(28px, 8vw, 48px)" },
    heroText: { fontSize: "clamp(12px, 3vw, 16px)" },
    productRow: { flexDirection: "column" },
    productCol: { width: "100%", maxWidth: "100%", marginBottom: 20 },
    productImage: { maxHeight: 300 },
  },
};

const Products = () => {
  return (
    <div style={styles.container}>
      {/* HERO / TOWNSCAPE */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>TOWNSCAPE</h1>
        <p style={styles.heroText}>
          We bring communities online by creating beautiful, accessible websites
          that help local businesses shine and connect with their audience. Our
          technology celebrates local identity, strengthens community bonds, and
          empowers businesses to grow online.
        </p>
        <Button
          type="primary"
          href="https://townscape.ca"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.heroButton}
        >
          Check it out!
        </Button>
      </section>

      {/* PRODUCTS */}
      {partnerProducts.map((product, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={product.id}>
            <Row
              gutter={[24, 24]}
              align="middle"
              style={{
                ...styles.productRow,
                flexDirection: isEven ? "row" : "row-reverse",
              }}
            >
              {/* IMAGE */}
              <Col xs={24} md={12} style={styles.productCol}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={styles.productCard}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={styles.productImage}
                  />
                </motion.div>
              </Col>

              {/* TEXT */}
              <Col xs={24} md={12} style={styles.productCol}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 style={styles.productTitle}>{product.title}</h3>
                  <div style={styles.productDescription}>
                    {product.description}
                  </div>
                </motion.div>
              </Col>
            </Row>
            <Divider style={styles.divider} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
