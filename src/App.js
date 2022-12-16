import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historic from "./components/Historic";
import Login from "./components/Login";
import Routine from "./components/Routine";
import SignUp from "./components/SignUp";
import Today from "./components/Today";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/habitos" element={<Routine />} />
        <Route path="/hoje" element={<Today />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
