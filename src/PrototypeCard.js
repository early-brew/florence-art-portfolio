import React, { useState } from "react";
import { Card, Button, Modal, Typography } from "antd";
import energyFlow from "./img/EnergyFlowHome.png";

const { Title, Paragraph } = Typography;

const PrototypeCard = () => {
  const [open, setOpen] = useState(false);

  const figmaEmbedUrl = "https://boar-hush-64063095.figma.site/";

  return (
    <>
      <Card
        hoverable
        style={{ maxWidth: 1000, margin: "0 auto", borderRadius: 12 }}
        cover={
          <img
            alt="Prototype Preview"
            src={energyFlow} // export from Figma
            style={{ height: 250, objectFit: "cover" }}
          />
        }
      >
        <Title level={4}>Energy Consulting Dashboard</Title>
        <Paragraph type="secondary">
          A modern interface for tracking energy projects, analytics, and field
          operations in real time.
        </Paragraph>

        <Button type="primary" onClick={() => setOpen(true)}>
          View Prototype
        </Button>
      </Card>

      <Modal
        title="Interactive Prototype"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={900}
      >
        <iframe
          title="Figma Prototype"
          src={figmaEmbedUrl}
          width="100%"
          height="500"
          style={{ border: "none" }}
          allowFullScreen
        />
      </Modal>
    </>
  );
};

export default PrototypeCard;
