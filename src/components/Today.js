import dayjs from "dayjs";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TodayHabit from "./TodayHabit";
import "dayjs/locale/pt-br";
import { AuthContext } from "../contexts/Context";
import { useContext } from "react";

export default function Today() {
    const { qtdDone } = useContext(AuthContext);

    dayjs.locale("pt-br");
  let day = dayjs().format("dddd");
  today();

  function today() {
    if (day === "domingo") {
      day = "Domingo";
    }
    if (day === "segunda-feira") {
      day = "Segunda";
    }
    if (day === "terça-feira") {
      day = "Terça";
    }
    if (day === "quarta-feira") {
      day = "Quarta";
    }
    if (day === "quinta-feira") {
      day = "Quinta";
    }
    if (day === "sexta-feira") {
      day = "Sexta";
    }
    if (day === "sábado") {
      day = "Sábado";
    }
  }
  return (
    <>
      <Navbar />
      <ContainerHabits>
        <Title>
          <h1>
            {day}, {dayjs().format("DD-MM")}
          </h1>
          <p>{qtdDone===0 ? "Nenhum hábito concluído ainda" : `${qtdDone}%`}</p>
        </Title>
        <TodayHabit />
      </ContainerHabits>
      <Footer />
    </>
  );
}

const ContainerHabits = styled.div`
  min-height: 100vh;
  width: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  color: #126ba5;
`;

const Title = styled.div`
  margin-top: 25%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  h1 {
    font-size: 22px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-size: 17px;
    line-height: 22px;
    color: #bababa;
  }
`;
