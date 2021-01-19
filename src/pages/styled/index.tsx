import styled, { ThemeProvider } from "styled-components";
import TextField from "../../components/TextFIeld";

interface IProps {
  primary?: string;
}

const theme = {
  font: "Calibri",
  size: "30px",
};

const Wrapper = styled.div`
  width: 300px;
  height: 400px;
`;

const Title = styled.p`
  color: green;
  font-size: 20px;
  font-family: "Staatliches", cursive;
`;

const Button = styled.button`
  background-color: ${(props: IProps) =>
    props.primary ? "#4caf50" : "#008cba"};
  border: none;
  color: #fff;
  padding: 15px 22px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

const HeaderText = styled.p`
  font-weight: bold;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.size};
`;

const StyledComponent: React.FC<IProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>Hello</Title>
        <Button primary>Primary</Button>
        <Button>Regular</Button>
        <HeaderText>Hello styled components</HeaderText>
        <TextField
          text="Hello Types"
          ok={true}
          i={10}
          person={{ firstName: "sudip", lastName: "sth" }}
        />
        <a
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sudipstha08@gmail.com&body=my-text"
        >
          Click here to email
        </a>
        <a href="mailto:user@domain.com?Subject=Hello%20User">Inbox me!</a>
      </Wrapper>
    </ThemeProvider>
  );
};

export default StyledComponent;
