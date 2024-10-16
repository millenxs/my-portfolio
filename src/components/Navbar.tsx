import React from "react";
import styled from "styled-components";

// Estilização dos componentes
const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
`;

const SocialContainer = styled.a<{ color: string }>`
  width: 32px;
  height: 32px;
  background-color: rgb(44, 44, 44);
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${(props) => props.color};
    transition-duration: 0.3s;
  }

  &:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }
`;

const SocialSvg = styled.svg`
  width: 17px;
  
  path {
    fill: rgb(255, 255, 255);
  }

  ${SocialContainer}:hover & {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Card>
        <SocialContainer href="https://www.instagram.com/millenameedeiros" color="#d62976" className="containerOne">
          <SocialSvg className="socialSvg instagramSvg" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </SocialSvg>
        </SocialContainer>

        <SocialContainer href="https://github.com/millenxs" color="#00acee" className="containerTwo">
          <SocialSvg className="socialSvg githubSvg" viewBox="0 0 24 24">
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
          </SocialSvg>
        </SocialContainer>

        <SocialContainer href="https://www.linkedin.com/in/millena-medeiros-76467b106/" color="#0072b1" className="containerThree">
          <SocialSvg className="socialSvg linkedinSvg" viewBox="0 0 24 24">
            <path d="M19.596 0H4.404C1.972 0 0 1.972 0 4.404v15.192C0 22.028 1.972 24 4.404 24h15.192C22.028 24 24 22.028 24 19.596V4.404C24 1.972 22.028 0 19.596 0zM7.086 20.452H3.25V9h3.836zm-1.918-13.185a2.233 2.233 0 1 1 0-4.465 2.233 2.233 0 0 1 0 4.465zm16.014 13.185h-3.836v-5.541c0-1.319-.028-3.018-1.839-3.018-1.839 0-2.117 1.438-2.117 2.927v5.632h-3.836V9h3.68v1.476h.052c.512-.965 1.76-1.977 3.63-1.977 3.887 0 4.602 2.552 4.602 5.862v5.094h-.002z" />
          </SocialSvg>
        </SocialContainer>
      </Card>
    </NavbarContainer>
  );
};

export default Navbar;
