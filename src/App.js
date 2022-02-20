import React from "react";
import Home from "./components/budget/home";
import Header from "./components/Header/header";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;
