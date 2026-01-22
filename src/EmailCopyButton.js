import { useState } from "react";
import { Button, Tooltip, message } from "antd";
import { MailOutlined } from "@ant-design/icons";

const EmailCopyButton = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      message.success("Email copied");

      setTimeout(() => setCopied(false), 1500);
    } catch {
      message.error("Failed to copy email");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Tooltip title={copied ? "Copied!" : email}>
        <Button
          type="default"
          shape="circle"
          icon={<MailOutlined />}
          onClick={handleCopy}
          style={{
            width: 40,
            height: 40,
            fontSize: 14,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          aria-label="Copy email"
        />
      </Tooltip>
    </div>
  );
};

export default EmailCopyButton;
