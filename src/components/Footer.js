import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/Context";
import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
  const { qtdDone } = useContext(AuthContext);
  return (
    <Container data-test="menu">
      <Menu>
        <Link to="/habitos" data-test="habit-link">
          <p>Hábitos</p>
        </Link>
        <Link to="/historico" data-test="history-link">
          <p>Histórico</p>
        </Link>
      </Menu>
      <Link to="/hoje" data-test="today">
        <Progress>
          <CircularProgressbar
            value={qtdDone}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52b6ff",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
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
  a {
    text-decoration: none;
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
  height: 73px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5%;
  background-color: white;
  overflow-y: hidden;
  p {
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
