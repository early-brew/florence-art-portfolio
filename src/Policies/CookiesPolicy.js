import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const CookiesPolicy = () => {
  return (
    <Card
      title="Cookies Policy"
      bordered
      style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}
    >
      <Typography>
        <Paragraph>
          <Text strong>Early Brew Cache</Text> ("we", "our", "us") uses cookies
          and similar technologies to improve your experience when using our
          website and services.
        </Paragraph>

        <Title level={5}>1. What Are Cookies</Title>
        <Paragraph>
          Cookies are small text files stored on your device that help us
          remember your preferences, understand site usage, and improve
          functionality.
        </Paragraph>

        <Title level={5}>2. Types of Cookies We Use</Title>
        <Paragraph>
          <ul>
            <li>
              <Text strong>Essential Cookies:</Text> Required for basic website
              functionality.
            </li>
            <li>
              <Text strong>Analytics Cookies:</Text> Help us understand how
              visitors interact with our website.
            </li>
            <li>
              <Text strong>Functional Cookies:</Text> Remember your preferences
              and settings.
            </li>
            <li>
              <Text strong>Advertising Cookies:</Text> Help deliver relevant
              advertisements (if applicable).
            </li>
          </ul>
        </Paragraph>

        <Title level={5}>3. How We Use Cookies</Title>
        <Paragraph>
          We use cookies to:
          <ul>
            <li>Enhance your browsing experience</li>
            <li>Analyze website traffic and performance</li>
            <li>Provide personalized content</li>
          </ul>
        </Paragraph>

        <Title level={5}>4. Managing Cookies</Title>
        <Paragraph>
          You can control and delete cookies using your browser settings. Please
          note that disabling cookies may affect website functionality.
        </Paragraph>

        <Title level={5}>5. Changes to This Policy</Title>
        <Paragraph>
          We may update this Cookies Policy from time to time. Updates will be
          posted on our website.
        </Paragraph>

        <Title level={5}>6. Contact Us</Title>
        <Paragraph>
          For questions about our use of cookies, contact us at:
          <Text code>support@earlybrewcache.ca</Text>
        </Paragraph>
      </Typography>
    </Card>
  );
};

export default CookiesPolicy;
