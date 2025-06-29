import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Registro from "./Components/Login/Registro";
import Recuperar from "./Components/Login/Recuperar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperar" element={<Recuperar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;