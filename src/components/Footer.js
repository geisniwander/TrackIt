import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Menu>
        <Link to="/habitos">
          <p>Hábitos</p>
        </Link>
        <Link to="/historico">
          <p>Histórico</p>
        </Link>
      </Menu>
      <Link to="/hoje">
        <Progress>
          <p>Hoje</p>
        </Progress>
      </Link>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 3%;
  a{
    text-decoration: none;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
  }
`;

const Menu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5%;
  background-color: white;
  p{
    color: #52b6ff;
  }    
`;

const Progress = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #52b6ff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 7;
  color: #ffffff;
`;
