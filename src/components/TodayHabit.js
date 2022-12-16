import styled from "styled-components";

export default function TodayHabit() {
  return (
    <Container>
      <ContainerHabit>
        <h1>Ler 1 capítulo do livro</h1>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
      </ContainerHabit>
      <ContainerStatus>
        <ion-icon name="checkbox"></ion-icon>
      </ContainerStatus>
    </Container>
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
  ion-icon{
    font-size: 90px;
    color: green;
  }
`;

