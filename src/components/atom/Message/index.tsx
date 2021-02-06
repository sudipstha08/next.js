import React from "react";
import { message } from "antd";

interface MessageProps {
  type: string;
  content: string;
  duration?: number;
}

const Message = ({ type, content }: MessageProps) => {
  const getMessage = (messageType: any) => {
    switch (messageType) {
      case "success":
        return message.success(content);
      case "error":
        return message.error(content);
      case "info":
        return message.info(content);
      case "warning":
        return message.warning(content);
      default:
        break;
    }
  };

  return <>{getMessage(type)}</>;
};

export { Message };
