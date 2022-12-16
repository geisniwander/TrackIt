import logo from "../assets/logo.png";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SignUp() {
  return (
    <ContainerSignUp>
      <img alt="logo" src={logo} />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="senha" />
      <Input type="text" placeholder="nome" />
      <Input type="url" placeholder="foto" />
      <Button type="submit">Cadastrar</Button>
      <p>Já tem uma conta? Faça login!</p>
    </ContainerSignUp>
  );
}

const ContainerSignUp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 20%;
    margin-bottom: 10%;
    width: 50%;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 8%;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 5%;
  margin: 2%;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  ::placeholder {
    padding-left: 3%;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
  }
`;

const Button = styled.button`
  width: 81%;
  height: 5%;
  margin-top: 2%;
  background: #52b6ff;
  border-radius: 5px;
  border: none;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
