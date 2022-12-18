import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [createHabit, setCreateHabit] = useState(false);
  const [habits, setHabits] = useState(undefined);
  const [deletH, setDeleteH] = useState(false);
  const [qtdDone, setQtdDone] = useState(undefined);
  const [todayHabits, setTodayHabits] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function login(e, email, password) {
    e.preventDefault();
    setLoading(true);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      { email: email.toString(), password: password.toString() }
    );
    promise.then((r) => {
      setToken(r.data.token);
      setName(r.data.name);
      setImage(r.data.image);
      navigate("/hoje");
      setLoading(false);
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setLoading(false);
    });
  }

  function create(e, name, days) {
    e.preventDefault();
    setLoading(true);
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
      setLoading(false);
    });
    promise.catch((err) => {console.log(err);setLoading(false)});
  }

  function conclude() {
    if (todayHabits.length === 0 || !todayHabits) {
      setQtdDone(0);
      return;
    } else {
      let qtd = todayHabits.length;
      let done = 0;
      todayHabits.map((habit) => habit.done && done++);
      setQtdDone(((done / qtd) * 100).toFixed());
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        token,
        createHabit,
        setCreateHabit,
        create,
        name,
        image,
        setHabits,
        habits,
        deletH,
        setDeleteH,
        qtdDone,
        todayHabits,
        setTodayHabits,
        conclude,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
