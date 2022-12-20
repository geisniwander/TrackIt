import { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/Context";
import { BeatLoader } from "react-spinners";

export default function NewHabit() {
  const days = [
    { name: "D", id: 0 },
    { name: "S", id: 1 },
    { name: "T", id: 2 },
    { name: "Q", id: 3 },
    { name: "Q", id: 4 },
    { name: "S", id: 5 },
    { name: "S", id: 6 },
  ];

  const [daysHabit, setDaysHabit] = useState([]);
  const { setCreateHabit, create, loading } = useContext(AuthContext);
  const [nameHabit, setNameHabit] = useState("");

  function createH(e) {
    e.preventDefault();
    if (nameHabit === "") {
      alert("Digite um título para o hábito");
      return;
    }
    if (daysHabit.length > 0) {
      create(nameHabit, daysHabit);
    } else {
      alert("Selecione ao menos um dia");
    }
  }

  function setDays(e, i) {
    e.preventDefault();
    if (daysHabit.includes(i)) {
      const array = daysHabit;
      const index = array.indexOf(i);
      array.splice(index, 1);
      setDaysHabit([...array]);
    } else {
      setDaysHabit([...daysHabit, i]);
    }
  }

  return (
    <Container data-test="habit-create-container">
      <Form>
        <Input
          type="text"
          placeholder="nome do hábito"
          value={nameHabit}
          onChange={(e) => setNameHabit(e.target.value)}
          disabled={loading}
          required
          data-test="habit-name-input"
        ></Input>
        <ContainerButtonsDay>
          {days.map((day) => (
            <ButtonDay
              key={day.id}
              indexDay={day.id}
              onClick={(e) => setDays(e, day.id)}
              color={daysHabit.includes(day.id) ? "#CFCFCF" : "white"}
              disabled={loading}
              data-test="habit-day"
            >
              {day.name}
            </ButtonDay>
          ))}
        </ContainerButtonsDay>
        <ContainerButton>
          <ButtonCancel
            onClick={() => setCreateHabit(false)}
            disabled={loading}
            data-test="habit-create-cancel-btn"
          >
            {" "}
            Cancelar
          </ButtonCancel>
          <ButtonSave
            type="submit"
            onClick={createH}
            disabled={loading}
            data-test="habit-create-save-btn"
          >
            {loading ? <BeatLoader color="white" size="10px" /> : "Salvar"}
          </ButtonSave>
        </ContainerButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  border-radius: 5px;
`;
const Form = styled.form`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerButtonsDay = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  margin-top: 2%;
`;
const ContainerButton = styled.div`
  width: 90%;
  background-color: white;
  display: flex;
  justify-content: end;
  margin-top: 7%;
  margin-bottom: 3%;
`;
const Input = styled.input`
  width: 90%;
  height: 48px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-top: 5%;
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
const ButtonCancel = styled.button`
  width: 84px;
  height: 35px;
  background: white;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #52b6ff;
  border: none;
  border-radius: 4px;
  margin-right: 5%;
`;
const ButtonSave = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  border: none;
`;
