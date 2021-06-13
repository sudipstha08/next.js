import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.header`
  display: flex;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  height: 64px;
  z-index: 200;
  align-items: center;
  background: #fff;
  contain: layout;
  font-size: 14px;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1500px;
  & a {
    color: #202124;
    font-weight: 500;
    font-size: 1rem;
    font-family: "Ubuntu", sans-serif;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <img src="/icons/jwt.svg" alt="logo" width="100" />
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
      <div>
        <Link href="/api">Api</Link>
      </div>
      <div>
        <Link href="/axios">Axios</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
      </div>
      <div className="sign-in">
        <button>Sign in</button>
      </div>
    </Wrapper>
  );
};

export { Header };
