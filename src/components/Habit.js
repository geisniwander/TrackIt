import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import lixeira from "../assets/lixeira.png";
import { AuthContext } from "../contexts/Context";
import { BeatLoader } from "react-spinners";

export default function Habit() {
  const days = [
    { name: "D", id: 0 },
    { name: "S", id: 1 },
    { name: "T", id: 2 },
    { name: "Q", id: 3 },
    { name: "Q", id: 4 },
    { name: "S", id: 5 },
    { name: "S", id: 6 },
  ];
  const { token, createHabit, habits, setHabits, deletH, setDeleteH } =
    useContext(AuthContext);
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
    return <BeatLoader color="#52b6ff" />;
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

  if (habits.length === 0) {
    return (
      <None>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </None>
    );
  }
  return (
    <Total>
      {habits.map((habit) => (
        <Container key={habit.id} data-test="habit-container">
          <Title>
            <p data-test="habit-name">{habit.name}</p>
            <img
              alt="excluir"
              onClick={() => {
                if (window.confirm("Deseja realmente apagar este item?")) {
                  deleteH(habit.id);
                  setDeleteH(true);
                }
              }}
              src={lixeira}
              data-test="habit-delete-btn"
            />
          </Title>
          <ContainerButtonsDay>
            {days.map((day) => (
              <ButtonDay
                key={day.id}
                indexDay={day.id}
                color={habit.days.includes(day.id) ? "#CFCFCF" : "white"}
                disabled
                data-test="habit-day"
              >
                {day.name}
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
const None = styled.div`
  margin-top: 5%;
  width: 90%;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: #666666;
`;
