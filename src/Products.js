// components/Products.js
import React from "react";
import { Card, Row, Col, Button, Divider } from "antd";
import coffee from "./img/CoffeeHut.jpg";
import announcements from "./img/Announcements.jpg";
import tourism from "./img/Tourism.jpg";
import maintenance from "./img/Maintenance.jpg";

const { Meta } = Card;

// Example product shape:
// {
//   id: 1,
//   title: "Feature Your Business",
//   description: "Showcase your products or services to thousands of potential customers every month.",
//   image: "https://via.placeholder.com/300x200",
//   ctaText: "Learn More",
//   ctaLink: "https://example.com"
// }

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
    title: "Tourism ",
    description:
      "Highlight that the town offers attractions, amenities, and essential services. Provide links to neighboring towns and regional options. Encourage visitors to extend their stay with compelling overnight reasons.",
    image: tourism,
    ctaText: "Discover More",
    ctaLink: "/partner-signup",
  },
];

const Products = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      {" "}
      <h2 style={{ fontSize: "2.5rem", marginBottom: 5 }}>
        Our Products & Features
      </h2>
      <p style={{ color: "#555", fontSize: "1.1rem", textAlign: "center" }}>
        Explore what Early Brew Cache offers and see how partnering with us can
        highlight your business.
      </p>
      <section style={{ padding: "25px 25px", backgroundColor: "#ffffffff" }}>
        <div
          style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 5px" }}
        >
          <h1 class="product-title">TOWNSCAPE</h1>
          <p style={{ color: "#555", fontSize: "1.1rem" }}>
            We bring communities online by creating beautiful, accessible
            websites that help local businesses shine and connect with their
            audience. Our technology celebrates local identity, strengthens
            community bonds, and empowers businesses to grow online.
          </p>
        </div>
        <Button
          style={{ marginBottom: 60 }}
          type="primary"
          target="_blank"
          rel="noopener noreferrer"
          href={"https://townscape.ca"}
        >
          {"Check it out!"}
        </Button>

        {partnerProducts.map((product, index) => {
          const isEven = index % 2 === 0;

          return (
            <div>
              <Row
                key={product.id}
                gutter={[24, 24]}
                align="middle"
                style={{
                  marginBottom: "20px",
                  flexDirection: isEven ? "row" : "row-reverse",
                }}
              >
                {/* Image Column */}
                <Col xs={24} md={12}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      borderRadius: 15,
                      objectFit: "cover",
                      maxHeight: 400,
                      marginTop: 15,
                    }}
                  />
                </Col>

                {/* Text Column */}
                <Col xs={24} md={12}>
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: 15,
                      marginTop: -5,
                    }}
                  >
                    {product.title}
                  </h3>

                  <div class="mission-text">{product.description}</div>
                </Col>
              </Row>
              <Divider />
            </div>
          );
        })}
      </section>
    </div>
  );
};

// export default ProductFeatures;

export default Products;
