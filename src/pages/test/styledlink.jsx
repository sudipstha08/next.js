import styled from "styled-components";

const Link = ({ red, text, className, ...props }) => (
  <a {...red} {...props} className={className}>
    {text}
  </a>
);

const StyledComp = styled(Link)`
  color: ${(props) => (props.red ? "red" : "blue")};
`;

const StyledLink = () => {
  return (
    <StyledComp text="Click" href="https://www.styled-components.com/" red />
  );
};

export default StyledLink;

// When you use argument destructuring, any variables pulled out of the
// props object will not be included when spread-applying the remaining
// props (...props)
