import logo from "../assets/logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { AuthContext } from "../contexts/Context";
import { useContext } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AuthContext);

  function register(e) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email: email.toString(),
        name: name.toString(),
        image: image.toString(),
        password: password.toString(),
      }
    );
    promise.then(() => {
      navigate("/");
      setLoading(false);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setLoading(false);
    });
  }

  return (
    <ContainerSignUp>
      <img alt="logo" src={logo} />
      <Form onSubmit={register}>
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
        <Input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          required
          data-test="user-name-input"
        />
        <Input
          type="url"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={loading}
          required
          data-test="user-image-input"
        />
        <Button type="submit" data-test="signup-btn">
          {loading ? <BeatLoader color="white" /> : "Cadastrar"}
        </Button>
      </Form>
      <Link to="/" disabled={loading} data-test="login-link">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
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
  a {
    text-decoration: none;
  }
`;

const Form = styled.form`
  width: 80%;
  height: 35%;
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
