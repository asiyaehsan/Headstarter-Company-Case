import React from "react";
import CalenderPage from "./Components/CalenderPage/CalenderPage";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/signin" element={<Signin />} />;
        <Route path="/account" element={<Account />} />;
        <Route path="/calendar" element={<CalenderPage />} />;
      </Routes>
      <CalenderPage />
    </div>
  );
}

export default App;
