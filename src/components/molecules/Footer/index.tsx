import styled from "styled-components";

const StyedFooter = styled.footer`
  width: 100%;
  background: #0086d1;
  height: 100px;
  display: grid;
  grid-template-columns: 30% 30% 40%;
  align-content: start;
  overflow: visible;
  & .footer-logo {
  }
  & .copyright {
    z-index: 999;
    color: #fff;
  }
  & .footer-img {
    overflow: visible;
    height: 600px;
    margin-top: -200px;
    img {
      overflow: visible;
      height: 400px;
      width: 400px;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <StyedFooter>
      <div className="footer-logo">
        <img src="/icons/jwt.svg" alt="logo" width="200" />
      </div>
      <div className="copyright">Copyright. All rights Reserved</div>
      <div className="footer-img">
        <img src="/images/man.svg" alt="man-sitting" width="200" />
      </div>
    </StyedFooter>
  );
};

export { Footer };
