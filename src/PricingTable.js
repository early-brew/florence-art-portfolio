import React from "react";
import { Card, Col, List, Row, Typography } from "antd";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const pricingPlans = [
  {
    name: "Consulting",
    price: "$140/hour",
    features: [
      "Identify marketing opportunities",
      "Optimize campaigns",
      "Align website & creative assets with overall marketing strategy",
    ],
  },
  {
    name: "Website Design",
    price: "$2,500 – $7,500",
    features: [
      "Build a site that drives leads & captures emails",
      "Integrate with marketing channels for better engagement",
      "Custom branding & responsive design",
    ],
  },
  {
    name: "Website Updates & Maintenance",
    price: "$70/hour",
    features: [
      "Keep your website current for campaigns & promotions",
      "Support marketing messaging and user experience",
      "Fix bugs and maintain security",
    ],
  },
  {
    name: "Marketing-Focused Creative Design",
    price: "$70 – $150/hour",
    features: [
      "Design landing pages, banners, graphics, and videos",
      "Increase engagement & conversions across social media, email, and ads",
      "Ensure creative assets align with marketing strategy",
    ],
  },
  {
    name: "Marketing Strategy + Asset Implementation",
    price: "$1,500 – $3,500/month",
    features: [
      "Execute campaigns with custom-designed web pages & visuals",
      "Align all creative assets with your marketing strategy",
      "Drive consistent brand awareness and leads",
    ],
  },
  {
    name: "Website + Marketing Bundle",
    price: "$5,000 – $10,000 + $1,500/month",
    features: [
      "Launch a marketing-ready website",
      "Ongoing content & creative support for campaigns",
      "Maximize ROI and improve brand consistency",
    ],
  },
];

const MarketingPricingTable = () => {
  return (
    <div
      style={{
        padding: "60px 20px",
        background: "#f9f6e7",
        fontFamily: "'EB Garamond', serif",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: 10,
          fontFamily: "'EB Garamond', serif",
        }}
      >
        Marketing & Website Services Pricing
      </Title>
      <Text
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: "50px",
          fontFamily: "'Instrument Sans', sans-serif",
          color: "#555",
        }}
      >
        Please contact for pricing inquiry at{" "}
        <a href="mailto:support@earlybrewcache.ca">support@earlybrewcache.ca</a>
      </Text>

      <Row gutter={[24, 24]} justify="center">
        {pricingPlans.map((plan, idx) => (
          <Col xs={24} sm={12} md={8} key={plan.name}>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card
                title={plan.name}
                bordered={false}
                style={{
                  borderRadius: 16,
                  textAlign: "center",
                  padding: 24,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                  background: "#fff",
                  minHeight: 320,
                }}
                headStyle={{ fontSize: "1.3rem", fontWeight: 600 }}
              >
                <Text
                  strong
                  style={{
                    display: "block",
                    marginBottom: 16,
                    fontSize: "1.2rem",
                  }}
                >
                  {plan.price}
                </Text>
                <List
                  dataSource={plan.features}
                  size="small"
                  renderItem={(item) => (
                    <List.Item
                      style={{
                        justifyContent: "center",
                        textAlign: "center",
                        borderBottom: "none",
                        padding: "4px 0",
                      }}
                    >
                      <Text>{item}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MarketingPricingTable;
