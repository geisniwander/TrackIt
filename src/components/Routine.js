import { useContext } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Habit from "./Habit";
import Navbar from "./Navbar";
import NewHabit from "./NewHabit";
import { AuthContext } from "../contexts/Context";

export default function Routine() {
const {createHabit, setCreateHabit} = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <ContainerHabits>
        <Title>
          <p>Meus Hábitos</p>
          <Add onClick={()=> setCreateHabit(true)}>+</Add>
        </Title>
        {createHabit ? <NewHabit /> : null}
        <Habit />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
`;

const Add = styled.div`
  width: 40px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
`;
