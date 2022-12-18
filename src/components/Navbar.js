import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/Context";

export default function Navbar() {
  const { image } = useContext(AuthContext);

  return (
    <Nav data-test="header">
      <Link to="/">
        <p>TrackIt</p>
      </Link>
      <img alt="foto-perfil" src={image} />
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 5%;
  overflow: hidden;
  z-index: 10;
  p {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 49px;
    color: #ffffff;
  }

  img {
    width: 10%;
    background-color: white;
    border-radius: 100%;
  }
  a {
    text-decoration: none;
  }
`;
