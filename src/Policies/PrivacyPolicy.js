import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const PrivacyPolicy = () => {
  return (
    <Card
      title="Privacy Policy"
      bordered
      style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}
    >
      <Typography>
        <Paragraph>
          <Text strong>Early Brew Cache</Text> ("we", "our", "us") respects your
          privacy. This Privacy Policy explains how we collect, use, and protect
          information when you use our software development services.
        </Paragraph>

        <Title level={5}>1. Information We Collect</Title>
        <Paragraph>
          We may collect:
          <ul>
            <li>
              Personal information you provide (name, email, phone, company)
            </li>
            <li>Usage data (how you interact with our services)</li>
            <li>Cookies and analytics information on our website</li>
          </ul>
        </Paragraph>

        <Title level={5}>2. How We Use Your Information</Title>
        <Paragraph>
          We use collected information to:
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you regarding projects or updates</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Paragraph>

        <Title level={5}>3. Sharing Your Information</Title>
        <Paragraph>
          We do not sell your data. We may share information with:
          <ul>
            <li>Service providers (hosting, analytics, payment processors)</li>
            <li>Legal authorities if required by law</li>
          </ul>
        </Paragraph>

        <Title level={5}>4. Data Security</Title>
        <Paragraph>
          We implement reasonable technical and organizational measures to
          protect your data.
        </Paragraph>

        <Title level={5}>5. Your Rights</Title>
        <Paragraph>
          You have the right to access, correct, or delete your personal
          information. Contact us at <Text code>support@earlybrewcache.ca</Text>{" "}
          for any requests.
        </Paragraph>

        <Title level={5}>6. Changes to This Policy</Title>
        <Paragraph>
          We may update this Privacy Policy from time to time. Updates will be
          posted on our website.
        </Paragraph>

        <Title level={5}>7. Contact Us</Title>
        <Paragraph>
          If you have any questions about this Privacy Policy, please contact us
          at:
          <Text code>support@earlybrewcache.ca</Text>
        </Paragraph>
      </Typography>
    </Card>
  );
};

export default PrivacyPolicy;
