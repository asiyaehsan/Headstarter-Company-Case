import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Account } from "./pages/Account";
import { Protected } from "./components/Protected";
import CalenderPage from "./components/CalenderPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/signin" element={<Signin />} />;
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          ;
          <Route path="/calender" element={<CalenderPage />} />;
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
