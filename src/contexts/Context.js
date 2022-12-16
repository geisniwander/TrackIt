import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [createHabit, setCreateHabit] = useState(false);
  const navigate = useNavigate();

  function login(e, email, password) {
    e.preventDefault();
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { email: email.toString(), password: password.toString() }
    );
    promise.then((r) => {
      setToken(r.data.token);
      setName(r.data.name);
      setImage(r.data.image);
      navigate("/hoje");
    });
    promise.catch((err) => console.log(err));
  }

  function create(e, name, days) {
    e.preventDefault();
    const body = { name, days };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );
    promise.then(() => {
      navigate("/habitos");
      setCreateHabit(false);
      setName("");
    });
    promise.catch((err) => console.log(err));
  }

  return (
    <AuthContext.Provider
      value={{ login, token, createHabit, setCreateHabit, create, image }}
    >
      {children}
    </AuthContext.Provider>
  );
}
