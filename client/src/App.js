import React from "react";
import CalenderPage from "./Components/CalenderPage/CalenderPage";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        {/* <NavBar /> */}
        <CalenderPage />
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
