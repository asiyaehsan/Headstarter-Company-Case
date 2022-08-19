import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Account } from "./pages/Account";
import { Protected } from "./components/Protected";
import CalendarPage from "./components/CalendarPage.tsx";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
     <CalendarPage />
    </div>
  );
}

export default App;
