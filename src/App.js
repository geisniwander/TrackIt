import { BrowserRouter, Route, Routes } from "react-router-dom";
import Historic from "./components/Historic";
import Login from "./components/Login";
import Routine from "./components/Routine";
import SignUp from "./components/SignUp";
import Today from "./components/Today";
import AuthProvider from "./contexts/Context";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Routine />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
