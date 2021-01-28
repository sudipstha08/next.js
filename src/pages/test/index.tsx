import styled from "styled-components";
import { Button } from "antd";

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

const StyledTest = styled.div.attrs({
  style: (props: any) => ({
    background: props.random ? "blue" : " green",
  }),
})`
  height: 100px;
  width: 200px;
  /* background: ${(props) => (props.$random ? "green" : "red")}; */
`;

const Box = styled.div.attrs({
  style: (props: any) => ({
    background: props.luminosity ? "blue" : "green",
  }),
})`
  margin: 2rem auto;
  width: 360px;
  height: 360px;
`;

const Test: React.FC<IProps> = () => {
  return (
    <div>
      <StyledButton $primary>Test Console</StyledButton>
      <StyledButton>Test</StyledButton>

      {/* <StyledTest random>hhhhhhh</StyledTest> */}
      <Box luminosity={+true}>fdfdfdf</Box>
    </div>
  );
};

export default Test;

// https://styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings
