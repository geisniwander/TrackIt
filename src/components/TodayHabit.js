import styled from "styled-components";
import { AuthContext } from "../contexts/Context";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";

export default function TodayHabit() {
  const { token, setTodayHabits, todayHabits, conclude, loading } =
    useContext(AuthContext);
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
      console.log(res);
      setTodayHabits(res.data);
    });
    promise.catch((err) => console.log(err));
  }, [done, loading]);

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
      promise.then(() => {
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
      promise.then(() => {
        setDone(false);
      });
      promise.catch((err) => console.log(err));
    }
  }

  if (todayHabits === undefined) {
    return <BeatLoader color="#52b6ff" />;
  }

  conclude();
  return (
    <>
      {todayHabits.map((habit) => (
        <Container key={habit.id} data-test="today-habit-container">
          <ContainerHabit>
            <h1 data-test="today-habit-name">{habit.name}</h1>
            <p data-test="today-habit-sequence">
              Sequência atual:{" "}
              <Sequence color={habit.done ? "#8FC549" : undefined}>
                {habit.currentSequence} dias
              </Sequence>
            </p>
            <p data-test="today-habit-record">
              Seu recorde:{" "}
              <Sequence
                color={
                  habit.done && habit.currentSequence === habit.highestSequence
                    ? "#8FC549"
                    : undefined
                }
              >
                {habit.highestSequence} dias
              </Sequence>
            </p>
          </ContainerHabit>
          <ContainerStatus color={habit.done ? "#8FC549" : "#E7E7E7"}>
            <ion-icon
              name="checkbox"
              onClick={() => {
                doneH(habit.id, habit.done);
                setDone(true);
              }}
              data-test="today-habit-check-btn"
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
const Sequence = styled.span`
  display: inline;
  color: ${(props) => props.color};
`;
