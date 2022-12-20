import logo from "../assets/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Context";
import { BeatLoader } from "react-spinners";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useContext(AuthContext);

  return (
    <ContainerLogin>
      <img alt="logo" src={logo} />
      <Form onSubmit={(e) => login(e, email, password)}>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
          data-test="email-input"
        />
        <Input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
          data-test="password-input"
        />
        <Button type="submit" disabled={loading} data-test="login-btn">
          {" "}
          {loading ? <BeatLoader color="white" /> : "Entrar"}{" "}
        </Button>
      </Form>
      <Link to="/cadastro" data-test="signup-link">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 20%;
    margin-bottom: 10%;
    width: 50%;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 8%;
  }
  a {
    text-decoration: none;
  }
`;
const Form = styled.form`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 98%;
  height: 45px;
  margin: 2%;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 99%;
  height: 45px;
  margin-top: 2%;
  background: #52b6ff;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
