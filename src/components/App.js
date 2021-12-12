import React from "react";
import NavBar from "./NavBar";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
