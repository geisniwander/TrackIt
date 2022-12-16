import styled from "styled-components";

export default function NewHabit() {
  const days = ["D", "S", "T", "Q", "Q", "S", "S", "S"];
  return (
    <Container>
      <Input type="text" placeholder="nome do hábito"></Input>
      <ContainerButtonsDay>
        {days.map((day, i) => (
          <ButtonDay key={i} indexDay={i}>
            {day}
          </ButtonDay>
        ))}
      </ContainerButtonsDay>
      <ContainerButton>
        <ButtonCancel> Cancelar</ButtonCancel>
        <ButtonSave>Salvar</ButtonSave>
      </ContainerButton>
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
  ::placeholder {
    padding-left: 3%;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const ButtonDay = styled.button`
  width: 33px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 1%;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #dbdbdb;
  display: flex;
  align-items:center;
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
