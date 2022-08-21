import React, { useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";
import { Protected } from "./components/Protected";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";

import { CalendarPage } from "./components/CalendarPage.tsx";
import VideoCallPage from "./pages/VideoCallPage";
import Team from "./pages/Team";

function App() {

  return (

   
       <div className="App" style={{ height: "100%" }}>
   
      <AuthContextProvider>
       <Routes>
            <Route path="/" element={<Login />} />;
            <Route path="/register" element={<Register />} />;
        </Routes>
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/calendar" element={<CalendarPage />} />;
          <Route path="/videocall" element={<VideoCallPage />} />;
          <Route path="/team" element={<Team />} />;
          
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
            />
           
        </Routes>
        </div>


      </AuthContextProvider>
    </div>
  );
}

export default App;