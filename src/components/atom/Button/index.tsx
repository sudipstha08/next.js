import { Button } from "antd";
import styled from "styled-components";

type ButtonType = "primary" | "ghost" | "dashed" | "link" | "text" | "default";
interface ButtonProps {
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: "button" | "submit" | "reset";
  icon?: any;
  loading?: boolean;
  size?: "large" | "middle" | "small";
  type?: ButtonType;
  onClick?: any;
  children?: React.ReactNode;
  className?: any;
}

const StyledButton = styled(Button)`
  display: contents;
`;

const ButtonComponent: React.FC<ButtonProps> = ({
  block,
  danger,
  disabled,
  ghost,
  href,
  htmlType,
  icon,
  loading,
  size,
  type,
  onClick,
  children,
  className,
}) => {
  return (
    <StyledButton
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      href={href}
      htmlType={htmlType}
      icon={icon}
      loading={loading}
      size={size}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export { ButtonComponent };
