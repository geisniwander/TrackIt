import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lixeira from "../assets/lixeira.png";
import { AuthContext } from "../contexts/Context";

export default function Habit() {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { token, createHabit,habits,setHabits,deletH, setDeleteH } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then((res) => {
      console.log(res.data);
      setHabits(res.data);
    });
    promise.catch((err) => console.log(err));
  }, [createHabit, deletH]);

  if (habits === undefined) {
    return <h1>Carregando...</h1>;
  }

  function deleteH(id) {
    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then(() => {
      navigate("/habitos");
      setDeleteH(false);
    });
    promise.catch((err) => console.log(err));
  }

  return (
    <Total>
      {habits.map((habit) => (
        <Container key={habit.id}>
          <Title>
            <p>{habit.name}</p>
            <img
              alt="excluir"
              onClick={() => {
                deleteH(habit.id);
                setDeleteH(true);
              }}
              src={lixeira}
            />
          </Title>
          <ContainerButtonsDay>
            {days.map((day, i) => (
              <ButtonDay
                key={i}
                indexDay={i}
                color={habit.days.includes(i) ? "#CFCFCF" : "white"}
                disabled
              >
                {day}
              </ButtonDay>
            ))}
          </ContainerButtonsDay>
        </Container>
      ))}
    </Total>
  );
}
const Total = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;
const Container = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 4%;
  padding-right: 2%;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #666666;
  margin-top: 4%;
  img {
    width: 12px;
    height: 15px;
  }
`;
const ContainerButtonsDay = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  margin-top: 3%;
  margin-bottom: 5%;
`;

const ButtonDay = styled.button`
  width: 33px;
  height: 33px;
  background: ${(props) => props.color};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 1%;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => (props.color === "white" ? "#CFCFCF" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
