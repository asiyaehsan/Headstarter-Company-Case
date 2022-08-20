import React, { useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Account } from "./pages/Account";
import { Protected } from "./components/Protected";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";

import { CalendarPage } from "./components/CalendarPage.tsx";
import VideoCallPage from "./pages/VideoCallPage";

function App() {
  return (
   
       <div className="App" style={{ height: "100%" }}>
      <VideoCallPage /> 
       <CalendarPage /> 
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/calendar" element={<CalendarPage />} />;
          <Route path="/videocall" element={<VideoCallPage />} />;
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
