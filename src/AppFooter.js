import React from "react";
import { Col, Layout, Row, Typography } from "antd";
import EmailCopyButton from "./EmailCopyButton";
import InstagramButton from "./InstagramLinkButton";

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#f3f1dcff",
        padding: "24px 40px",
      }}
    >
      {/* Top section: Company name + social buttons */}
      <Row
        justify="space-between"
        align="middle"
        gutter={[16, 16]}
        style={{ marginBottom: 24, flexWrap: "wrap" }}
      >
        <Col>
          <h1
            className="brand-title"
            style={{ margin: 0, fontFamily: "'EB Garamond', serif" }}
          >
            Early Brew Cache Inc.
          </h1>
        </Col>

        <Col>
          <Row justify="center" gutter={[16, 16]}>
            <Col>
              <EmailCopyButton email="support@earlybrewcache.ca" />
            </Col>
            <Col>
              <InstagramButton
                url="https://instagram.com/earlybrewcache"
                handle="@earlybrewcache"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Bottom section: © + policy links */}
      <Row
        justify="space-between"
        align="middle"
        style={{
          borderTop: "1px solid #ccc",
          paddingTop: 16,
          flexWrap: "wrap",
        }}
      >
        <Col>
          <Text strong>© 2026 Early Brew Cache</Text>
        </Col>
        <Col>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
            <Link href="/cookies-policy" target="_blank">
              Cookies Policy
            </Link>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
