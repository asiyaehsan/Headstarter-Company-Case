import React from "react";
import CalenderPage from "./pages/CalenderPage";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Account } from "./pages/Account";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <NavBar />
        {/* <CalenderPage /> */}
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/signin" element={<Signin />} />;
          <Route path="/account" element={<Account />} />;
          <Route path="/calendar" element={<CalenderPage />} />;
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
