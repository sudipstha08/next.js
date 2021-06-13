import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.header`
  display: flex;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <img src="/icons/jwt.svg" alt="logo" />
      </div>
      <div>
        <Link href="/docs">Documentation</Link>
      </div>
      <div>
        <Link href="/contact-us">Contact us</Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Search.." />
      </div>
      <div className="sign-in">
        <button>Sign in</button>
      </div>
    </Wrapper>
  );
};

export { Header };
