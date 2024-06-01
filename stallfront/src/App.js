import React from "react";
import { Route, Routes } from "react-router-dom";
import Cashbox from "./components/Cashbox";
import history from "./components/History";
import Orders from "./components/Orders";
import theme from "./components/ui/Theme";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import "./style.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Navbar />

        <Routes>
          <Route path="/history" Component={history} />
          <Route path="/cashbox" Component={Cashbox} />

          <Route exact path="/" Component={Orders} />
        </Routes>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
