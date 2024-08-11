import { useState } from "react";
import "./App.css";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPassword from "./Pages/LoginSignup/ForgetPassword";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path = "/" element = {<LoginSignup />}/>
            <Route path = "/forget-password" element = {<ForgetPassword />}/>
            <Route path = "/sign-up" element = {<LoginSignup/>}/>
          
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
