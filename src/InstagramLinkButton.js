import { Button, Tooltip } from "antd";
import { InstagramOutlined } from "@ant-design/icons";

const InstagramButton = ({ url, handle }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        fontWeight: "bold",
      }}
    >
      <Tooltip title={handle || "Visit Instagram"}>
        <Button
          type="default"
          shape="circle"
          icon={<InstagramOutlined />}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 40,
            height: 40,
            fontSize: 14,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          aria-label="Open Instagram"
        />
      </Tooltip>
    </div>
  );
};

export default InstagramButton;
