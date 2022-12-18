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

  function Percentage() {
    if (qtdDone <= 0) {
      return <p>Nenhum hábito concluído ainda</p>;
    } else {
      return (
        <Sequence>
          <p>{qtdDone}% dos hábitos concluídos</p>
        </Sequence>
      );
    }
  }

  return (
    <>
      <Navbar />
      <Total>
        <ContainerHabits>
          <Title>
            <h1 data-test="today">
              {day}, {dayjs().format("DD-MM")}
            </h1>
            <Percentage data-test="today-counter" />
          </Title>
          <TodayHabit />
        </ContainerHabits>
      </Total>
      <Footer />
    </>
  );
}
const Total = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
`;
const ContainerHabits = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  color: #126ba5;
  padding-bottom: 30%;
`;

const Title = styled.div`
  margin-top: 25%;
  width: 100%;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  font-style: normal;
  font-weight: 400;
  overflow-y: hidden;
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

const Sequence = styled.span`
  display: inline;
  p {
    color: #8fc549;
  }
`;
