import React from "react";
import { Card, Col, Divider, List, Row, Typography } from "antd";

const { Title, Text } = Typography;

const pricingPlans = [
  {
    name: "Consulting",
    pages: "-",
    maintenance: "-",
    announcements: "-",
    price: "$140/hour",
    features: [
      "Identify marketing opportunities",
      "Optimize campaigns",
      "Align website & creative assets with overall marketing strategy",
    ],
  },
  {
    name: "Website Design",
    pages: "5–15 pages, fully responsive",
    maintenance: "Updates & support available",
    announcements: "-",
    price: "$2,500 – $7,500",
    features: [
      "Build a site that drives leads & captures emails",
      "Integrate with marketing channels for better engagement",
      "Custom branding & responsive design",
    ],
  },
  {
    name: "Website Updates & Maintenance",
    pages: "-",
    maintenance: "Ongoing updates",
    announcements: "-",
    price: "$70/hour",
    features: [
      "Keep your website current for campaigns & promotions",
      "Support marketing messaging and user experience",
      "Fix bugs and maintain security",
    ],
  },
  {
    name: "Marketing-Focused Creative Design",
    pages: "-",
    maintenance: "-",
    announcements: "-",
    price: "$70 – $150/hour",
    features: [
      "Design landing pages, banners, graphics, and videos",
      "Increase engagement & conversions across social media, email, and ads",
      "Ensure creative assets align with marketing strategy",
    ],
  },
  {
    name: "Marketing Strategy + Asset Implementation",
    pages: "-",
    maintenance: "-",
    announcements: "-",
    price: "$1,500 – $3,500/month",
    features: [
      "Execute campaigns with custom-designed web pages & visuals",
      "Align all creative assets with your marketing strategy",
      "Drive consistent brand awareness and leads",
    ],
  },
  {
    name: "Website + Marketing Bundle",
    pages: "5–15 pages website + ongoing marketing support",
    maintenance: "Full weekly updates + creative assets",
    announcements: "-",
    price: "$5,000 – $10,000 + $1,500/month",
    features: [
      "Launch a marketing-ready website",
      "Ongoing content & creative support for campaigns",
      "Maximize ROI and improve brand consistency",
    ],
  },
];

const extraRate = {
  description: "Additional work beyond plan scope",
  price: "$140/hour",
};

const MarketingPricingTable = () => {
  return (
    <div
      style={{
        padding: "40px",
        background: "#f4e8d4ff",
        fontFamily: "'EB Garamond', serif",
      }}
    >
      <Title
        level={2}
        style={{ textAlign: "center", fontFamily: "'EB Garamond', serif" }}
      >
        Marketing & Website Services Pricing
      </Title>
      <Title
        level={5}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontFamily: "'Instrument Sans', sans-serif",
        }}
      >
        Please contact for pricing inquiry at <a>support@earlybrewcache.ca</a>
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {pricingPlans.map((plan) => (
          <Col xs={24} sm={12} md={8} key={plan.name}>
            <Card
              title={plan.name}
              bordered
              style={{ borderRadius: 6, textAlign: "center" }}
            >
              <List
                size="small"
                dataSource={plan.features}
                style={{ margin: "-5px" }}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ textAlign: "center" }}>{item}</span>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* 
      <Card
        title="Extra Work / Hourly Rate"
        bordered
        style={{
          borderRadius: 12,
          textAlign: "center",
          maxWidth: 400,
          margin: "40px auto",
        }}
      >
        <Text>{extraRate.description}</Text>
        <br />
        <Text strong>{extraRate.price}</Text>
      </Card> */}
    </div>
  );
};

export default MarketingPricingTable;
