import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Historic() {
  return (
    <>
      <Navbar />
      <Container>
        <Title>
          <h1>Histórico</h1>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Title>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
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
    margin-top: 5%;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;
