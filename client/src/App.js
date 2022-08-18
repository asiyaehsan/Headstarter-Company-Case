import React from "react";




import CalendarPage from "./pages/CalendarPage.tsx";
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
        { /* <CalendarPage /> */}
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/signin" element={<Signin />} />;
          <Route path="/account" element={<Account />} />;
          <Route path="/calendar" element={<CalendarPage />} />;
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
