import React from "react";
import { Input } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 55px;
`;
const Error = styled.p`
  color: red;
  font-size: 14px;
  text-align: left;
`;

interface IProps {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  onChange?: any;
  value?: string;
  type?: string;
  name?: string;
  error?: any;
  placeholder?: string;
  onBlur?: any;
}

const TextField = ({
  suffix,
  onChange,
  value,
  error,
  type,
  prefix,
  name,
  placeholder,
  onBlur,
}: IProps) => {
  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        suffix={suffix}
        onChange={onChange}
        value={value}
        type={type}
        prefix={prefix}
        name={name}
        onBlur={onBlur}
      />
      {error && <Error>*{error}</Error>}
    </Wrapper>
  );
};

export { TextField };
