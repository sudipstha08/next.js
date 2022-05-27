import styled from "styled-components";
import { Button } from "antd";
import React, { useEffect } from "react";

// FILTERING COMPONENT
// const StyledButton = styled(({ primary, ...props }) => <Button {...props} />)`
//   /* color: ${(props) => (props.primary ? "white" : "black")}; */
//   font-weight: 600;
//   background: ${(props) => (props.$primary ? "green" : "red")};
// `;

interface IProps {
  $primary?: boolean;
}

const StyledButton = styled(Button)`
  background: ${(props: IProps) => (props.$primary ? "green" : "red")};
`;

// const StyledTest = styled.div.attrs({
//   style: (props: any) => ({
//     background: props.random ? "blue" : " green",
//   }),
// })`
//   height: 100px;
//   width: 200px;
//   /* background: ${(props) => (props.$random ? "green" : "red")}; */
// `;

// const Box = styled.div.attrs({
//   style: (props: any) => ({
//     background: props.luminosity ? "blue" : "green",
//   }),
// })`
//   margin: 2rem auto;
//   width: 360px;
//   height: 360px;
// `;

const Meeting = require("google-meet-api").meet;

const Test: React.FC<IProps> = () => {
  useEffect(() => {
    Meeting({
      clientId:
        "385089649256-nj0ad0qlmbtdg40rinjkp5s8nss4dmmv.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "",
      date: "2021/12/1",
      time: "15:30",
      summary: "Test",
      location: "kathmandu",
      description: "This is a test app",
    }).then(function (result) {
      console.log(result);
    });
  }, []);

  return (
    <div>
      <StyledButton $primary>Test Console</StyledButton>
      <StyledButton>Test</StyledButton>

      {/* <StyledTest random>hhhhhhh</StyledTest> */}
      {/* <Box luminosity={+true}>fdfdfdf</Box> */}
    </div>
  );
};

export default Test;

// https://styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings
