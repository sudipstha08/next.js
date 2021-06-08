import styled from "styled-components";
interface IProps {
  inverted?: number;
}

const StyledLink = styled.button`
  color: ${(props: IProps) => (props.inverted ? "black" : "green")};
`;

const Navbar: React.FC<IProps> = () => {
  return (
    <nav>
      <StyledLink inverted={+true}>About fdfdf </StyledLink>
    </nav>
  );
};

export default Navbar;

// https://dev.to/jeansmaug/how-to-fix-the-received-true-for-a-non-boolean-attribute-error-3pm9
