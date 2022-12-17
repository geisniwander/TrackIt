import styled from "styled-components";
import { AuthContext } from "../contexts/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function TodayHabit() {
  const { token, createHabit, habits, setHabits, setQtdDone } = useContext(AuthContext);
  const [todayHabits, setTodayHabits] = useState(undefined);
  const [done, setDone] = useState(false);
 

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((res) => {
      setTodayHabits(res.data);
      
    });
    promise.catch((err) => console.log(err));

  }, [done]);



  function doneH(i, done) {
    if (done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/uncheck`,
        { body: {} },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      promise.then((res) => {
        setDone(false);
      });
      promise.catch((err) => console.log(err));
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${i}/check`,
        { body: {} },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      promise.then((res) => {
        setDone(false);
      });
      promise.catch((err) => console.log(err));
    }
  }

  function conclude(){
    let qtd = todayHabits.length;
    let done =0;
    todayHabits.map((habit)=> {habit.done ? done++ : done=done })
    console.log(done)
    setQtdDone((done/qtd)*100)
  }

  if (todayHabits === undefined) {
    return <h1>Carregando...</h1>;
  }

  return (
    conclude(),
    <>        
      {todayHabits.map((habit) => (
        <Container key={habit.id}>
          <ContainerHabit>
            <h1>{habit.name}</h1>
            <p>Sequência atual: {habit.currentSequence}</p>
            <p>Seu recorde: {habit.highestSequence}</p>
          </ContainerHabit>
          <ContainerStatus color={habit.done ? "#8FC549" : "#E7E7E7"}>
            <ion-icon
              name="checkbox"
              onClick={() => {
                doneH(habit.id, habit.done);
                setDone(true);
              }}
            ></ion-icon>
          </ContainerStatus>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 2.5%;
  margin-top: 5%;
  border-radius: 5px;
`;

const ContainerHabit = styled.div`
  width: 70%;
  background-color: white;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  color: #666666;
  h1 {
    font-size: 19px;
    line-height: 25px;
    margin-bottom: 2%;
  }
  p {
    font-size: 12px;
    line-height: 16px;
  }
`;

const ContainerStatus = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  justify-content: end;
  ion-icon {
    font-size: 90px;
    color: ${(props) => props.color};
  }
`;
